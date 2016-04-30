var webpack_isomorphic_tools_plugin = require('webpack-isomorphic-tools/plugin');
 
module.exports = {
  assets: {
    images: {
      extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
    },
    styles: {
			extensions: ['less'],
			filter(module, regex, options, log) {
				if (options.development) {
					return webpack_isomorphic_tools_plugin.style_loader_filter(module, regex, options, log);
				} else {
          return regex.test(module.name);
        }
			},
      path: function(module, options, log) {
        if (options.development) {
          // in development mode there's webpack "style-loader",
          // so the module.name is not equal to module.name
          return webpack_isomorphic_tools_plugin.style_loader_path_extractor(module, options, log);
        } else {
          // in production mode there's no webpack "style-loader",
          // so the module.name will be equal to the asset path
          return module.name;
        }
      },
      parser: function(module, options, log) {
        if (options.development) {
          return webpack_isomorphic_tools_plugin.css_modules_loader_parser(module, options, log);
        } else {
          // in production mode there's Extract Text Loader which extracts CSS text away
          return module.source;
        }
      }
		}
  }
};
