Ext.data.JsonP.econda_proxy_MediaEvent({"tagname":"class","name":"econda.proxy.MediaEvent","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-econda.proxy.MediaEvent","members":{"cfg":[{"name":"contentLabel","tagname":"cfg","owner":"econda.proxy.MediaEvent","meta":{},"id":"cfg-contentLabel"},{"name":"duration","tagname":"cfg","owner":"econda.proxy.MediaEvent","meta":{},"id":"cfg-duration"},{"name":"eventName","tagname":"cfg","owner":"econda.proxy.MediaEvent","meta":{},"id":"cfg-eventName"},{"name":"mediaType","tagname":"cfg","owner":"econda.proxy.MediaEvent","meta":{},"id":"cfg-mediaType"},{"name":"position","tagname":"cfg","owner":"econda.proxy.MediaEvent","meta":{},"id":"cfg-position"},{"name":"previewUri","tagname":"cfg","owner":"econda.proxy.MediaEvent","meta":{},"id":"cfg-previewUri"},{"name":"trackerId","tagname":"cfg","owner":"econda.proxy.MediaEvent","meta":{},"id":"cfg-trackerId"}],"property":[{"name":"__p","tagname":"property","owner":"econda.proxy.MediaEvent","meta":{"private":true},"id":"property-__p"}],"method":[{"name":"copy","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-copy"},{"name":"getContentLabel","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-getContentLabel"},{"name":"getDuration","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-getDuration"},{"name":"getEventName","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-getEventName"},{"name":"getMediaType","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-getMediaType"},{"name":"getPosition","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-getPosition"},{"name":"getPreviewUri","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-getPreviewUri"},{"name":"getTrackerId","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{},"id":"method-getTrackerId"},{"name":"setContentLabel","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{"chainable":true},"id":"method-setContentLabel"},{"name":"setDuration","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{"chainable":true},"id":"method-setDuration"},{"name":"setEventName","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{"chainable":true},"id":"method-setEventName"},{"name":"setMediaType","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{"chainable":true},"id":"method-setMediaType"},{"name":"setPosition","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{"chainable":true},"id":"method-setPosition"},{"name":"setPreviewUri","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{"chainable":true},"id":"method-setPreviewUri"},{"name":"setTrackerId","tagname":"method","owner":"econda.proxy.MediaEvent","meta":{"chainable":true},"id":"method-setTrackerId"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"MediaEvent.js","href":"MediaEvent.html#econda-proxy-MediaEvent"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/MediaEvent.html#econda-proxy-MediaEvent' target='_blank'>MediaEvent.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Media Event object</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-contentLabel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-cfg-contentLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-cfg-contentLabel' class='name not-expandable'>contentLabel</a><span> : String</span></div><div class='description'><div class='short'><p>Content label string</p>\n</div><div class='long'><p>Content label string</p>\n</div></div></div><div id='cfg-duration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-cfg-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-cfg-duration' class='name expandable'>duration</a><span> : Number</span></div><div class='description'><div class='short'>duration of media file ...</div><div class='long'><p>duration of media file</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-eventName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-cfg-eventName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-cfg-eventName' class='name not-expandable'>eventName</a><span> : String</span></div><div class='description'><div class='short'><p>Name of event</p>\n</div><div class='long'><p>Name of event</p>\n</div></div></div><div id='cfg-mediaType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-cfg-mediaType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-cfg-mediaType' class='name expandable'>mediaType</a><span> : String</span></div><div class='description'><div class='short'>Type of media (\"audio\" or \"video\"} ...</div><div class='long'><p>Type of media (\"audio\" or \"video\"}</p>\n<p>Defaults to: <code>&quot;video&quot;</code></p></div></div></div><div id='cfg-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-cfg-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-cfg-position' class='name expandable'>position</a><span> : Number</span></div><div class='description'><div class='short'>Current position in media playback ...</div><div class='long'><p>Current position in media playback</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-previewUri' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-cfg-previewUri' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-cfg-previewUri' class='name not-expandable'>previewUri</a><span> : String</span></div><div class='description'><div class='short'><p>https uri to media file preview</p>\n</div><div class='long'><p>https uri to media file preview</p>\n</div></div></div><div id='cfg-trackerId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-cfg-trackerId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-cfg-trackerId' class='name expandable'>trackerId</a><span> : Number</span></div><div class='description'><div class='short'>Id of tracker (unique per page) ...</div><div class='long'><p>Id of tracker (unique per page)</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__p' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-property-__p' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-property-__p' class='name expandable'>__p</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Private properties collection ...</div><div class='long'><p>Private properties collection</p>\n<p>Defaults to: <code>{eventName: null, contentLabel: null, mediaType: 'video', position: 0, duration: 0, trackerId: 0, previewUri: null}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-copy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-copy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-copy' class='name expandable'>copy</a>( <span class='pre'></span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></div><div class='description'><div class='short'>Returns a copy of this event ...</div><div class='long'><p>Returns a copy of this event</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getContentLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-getContentLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-getContentLabel' class='name expandable'>getContentLabel</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Getter for contentLabel ...</div><div class='long'><p>Getter for contentLabel</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>content label</p>\n</div></li></ul></div></div></div><div id='method-getDuration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-getDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-getDuration' class='name expandable'>getDuration</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Getter for duration ...</div><div class='long'><p>Getter for duration</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>media duration</p>\n</div></li></ul></div></div></div><div id='method-getEventName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-getEventName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-getEventName' class='name expandable'>getEventName</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Get eventName property ...</div><div class='long'><p>Get eventName property</p>\n</div></div></div><div id='method-getMediaType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-getMediaType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-getMediaType' class='name expandable'>getMediaType</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Getter for mediaType ...</div><div class='long'><p>Getter for mediaType</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-getPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-getPosition' class='name expandable'>getPosition</a>( <span class='pre'>currentPosition</span> ) : Number</div><div class='description'><div class='short'>Getter for current position ...</div><div class='long'><p>Getter for current position</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>currentPosition</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPreviewUri' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-getPreviewUri' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-getPreviewUri' class='name expandable'>getPreviewUri</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Getter for previewUri ...</div><div class='long'><p>Getter for previewUri</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>uri for preview</p>\n</div></li></ul></div></div></div><div id='method-getTrackerId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-getTrackerId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-getTrackerId' class='name expandable'>getTrackerId</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Getter for trackerId ...</div><div class='long'><p>Getter for trackerId</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Id of tracker</p>\n</div></li></ul></div></div></div><div id='method-setContentLabel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-setContentLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-setContentLabel' class='name expandable'>setContentLabel</a>( <span class='pre'>contentLabel</span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Setter for content label ...</div><div class='long'><p>Setter for content label</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>contentLabel</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setDuration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-setDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-setDuration' class='name expandable'>setDuration</a>( <span class='pre'>duration</span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Setter for duration (length of video) ...</div><div class='long'><p>Setter for duration (length of video)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>duration</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setEventName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-setEventName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-setEventName' class='name expandable'>setEventName</a>( <span class='pre'>eventName</span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Set eventName property ...</div><div class='long'><p>Set eventName property</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setMediaType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-setMediaType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-setMediaType' class='name expandable'>setMediaType</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Setter for mediaType ...</div><div class='long'><p>Setter for mediaType</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-setPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-setPosition' class='name expandable'>setPosition</a>( <span class='pre'>currentPosition</span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Setter for position ...</div><div class='long'><p>Setter for position</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>currentPosition</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPreviewUri' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-setPreviewUri' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-setPreviewUri' class='name expandable'>setPreviewUri</a>( <span class='pre'>uri</span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Setter for previewUri ...</div><div class='long'><p>Setter for previewUri</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uri</span> : String<div class='sub-desc'><p>HTTPS uri to video preview</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setTrackerId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='econda.proxy.MediaEvent'>econda.proxy.MediaEvent</span><br/><a href='source/MediaEvent.html#econda-proxy-MediaEvent-method-setTrackerId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/econda.proxy.MediaEvent-method-setTrackerId' class='name expandable'>setTrackerId</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Setter for trackerId ...</div><div class='long'><p>Setter for trackerId</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Number<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/econda.proxy.MediaEvent\" rel=\"econda.proxy.MediaEvent\" class=\"docClass\">econda.proxy.MediaEvent</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});