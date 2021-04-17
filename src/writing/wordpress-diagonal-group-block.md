---
title: This Is My First Ever Post
date: 2019-05-30
tags: ['post']
layout: layouts/post.njk
code_snippet: true
---

``` js
function myFunction() {
	return true;
}
```
``` css
.alignfull {
    margin-left: calc(-100vw / 2 + 100% / 2);
    margin-right: calc(-100vw / 2 + 100% / 2);
    max-width: 100vw;
}
```
``` php
add_action( 'enqueue_block_editor_assets', 'sg_storyblock_init' );
function sg_storyblock_init(){
	( sharegate_is_dev() ) ? $extension = "" : $extension = ".min";

	wp_enqueue_script(
        'storyblock-editor-script',
		EXTEND_SHAREGATE_URI . 'dist/js/storyblock/storyblock'.$extension.'.js',  
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		filemtime( EXTEND_SHAREGATE_DIR . 'dist/js/storyblock/storyblock'.$extension.'.js' ),
		true
	);
}
```
``` html
<div class="flex-auto flex items-center justify-between">
</div>
```
yo
 
Eleventy is super fresh init.