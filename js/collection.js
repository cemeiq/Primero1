// Entry component with image and sound
enyo.kind({
	name: "collection",
	kind: enyo.Control,
	published: { name: "", selection: false },
	classes: "collection",
	components: [
		{ name: "collectionImage", classes: "collectionImage", kind: "Image" }
	],

	// Constructor
	create: function() {
		this.inherited(arguments);
		this.nameChanged();
		this.selectionChanged();
	},

});
