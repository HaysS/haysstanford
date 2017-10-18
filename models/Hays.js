var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Hays Model
 * ==========
 */
var Hays = new keystone.List('Hays');

Hays.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Hays.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Hays.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Hays.defaultColumns = 'name, email, isAdmin';
Hays.register();
