This demostration extends [require.js] to use the library in chrome's content scripts by monkeypatching.

This code is once posted in [the require.js' forum](https://groups.google.com/d/topic/requirejs/elU_NYjunRw). The original require.js implementation of script loading is inserting `<script>` to the document and handling `load` event. But chrome isorates the script execution context in tabs from content scripts. Although content scripts is injected into the tab's context, module files are loaded into extension's context. This monkeypatch fixes them by loading modules to tab's context by XHR to the extension's URL and `eval`ing the response.

Licensed under [MIT].

[require.js]: http://www.requirejs.org/
[MIT]: http://opensource.org/licenses/MIT
