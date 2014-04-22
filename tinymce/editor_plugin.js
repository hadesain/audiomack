// Docu : http://wiki.moxiecode.com/index.php/TinyMCE:Create_plugin/3.x#Creating_your_own_plugins

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('tinymce_audiomack');
	tinymce.create('tinymce.plugins.tinymce_audiomack', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mcetinymce_audiomack', function() {
				ed.windowManager.open({
					file : ajaxurl + '?action=audiomack_ajax_render_popup_content', // wp admin ajax variable
					width : 800 + ed.getLang('tinymce_audiomack.delta_width', 0),
					height : 600 + ed.getLang('tinymce_audiomack.delta_height', 0),
					inline : 1
				}, {
					plugin_url : url // Plugin absolute URL
				});
			});

			// Register example button
			ed.addButton('tinymce_audiomack', {
				title : 'Audiomack',
				cmd : 'mcetinymce_audiomack',
				image : url + '/icon.jpg'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			/*ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('tinymce_audiomack', n.nodeName == 'IMG');
			});*/
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
					longname  : 'Audiomack',
					author 	  : 'Audiomack',
					authorurl : 'http://www.Audiomack.com',
					infourl   : 'http://www.Audiomack.com',
					version   : "1.0.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('tinymce_audiomack', tinymce.plugins.tinymce_audiomack);
})();
