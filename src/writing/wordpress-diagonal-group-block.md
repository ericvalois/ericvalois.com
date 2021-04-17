---
title: Styling the WordPress core/group block with diagonals
date: 2019-05-30
tags: ['post']
layout: layouts/post.njk
code_snippet: true
---

<img src="/images/blog/wordpress-group-block-diagonal.jpg" alt="Wordpress"/>

``` css
.is-style-diagonal-both{ clip-path: polygon(0% 0%, 0% calc(100% - 5vw), 100% 100%, 100% calc(0% + 5vw)); }
```

``` php
register_block_style(
    'core/group',
    array(
        'name'         => 'diagonal-both',
        'label'        => __( 'Diagonal Both', 'sharegate' ),
    )
);
```


``` php
/*
* Add wrapper to group block with diagonal variations
*/
add_filter( 'render_block_core/group', 'sg_group_diagonal_wrapper', 10, 2 );
function sg_group_diagonal_wrapper( $block_content, $block ) {
	if ( is_admin() ){
		return $block_content;
	}

	if( strpos($block_content, "is-style-diagonal-") === false ){
		return $block_content;
	}
	
	$block_content = '<div class="drop-shadow-lg">' . $block_content . '</div>';

	return $block_content;
}
```
yo
 
Eleventy is super fresh init.