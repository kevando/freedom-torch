---
permalink: /china
title: China Timeline
description: Links from around the web
layout: page
meta:
  title: China's Threat to Freedom
---

 {% assign china_posts = site.posts | where_exp:"post", "post.category contains 'china'"  %}

<div class="posts">
  {% for post in china_posts -%}
  <div class="post">

  <!-- <h3>{{ post.title }}</h3> -->
  
  <p class="date">{{ post.date | date: "%Y-%m-%d" }}</p>
  <p class="description">{{ post.description  }}</p>
  <p></p>
</div>
  {%- endfor -%}
</div>

<br />

<!-- ### Other stats -->

<!-- - FBI opens a new case on China every 10 hours -->
<!-- - 100,000 Chinese students come to America every year. -->

  <!-- {% if post.source.url %}
    <h3><a href="{{ post.source.url }}">{{ post.title }}</a></h3>
    {% else %}
    <h3>{{ post.title }}</h3>
    {% endif %} -->