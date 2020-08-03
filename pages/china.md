---
permalink: /china
title: China
description: Links from around the web
layout: surf
---

<p>It looks like China is becoming more aggressive lately. Here are some facts</p>

<table style="width:100%">
  <tr>
    <th>Date</th>
    <th>Description</th>
    <th>Source</th>
  </tr>
  {% for post in site.posts -%}
  {% if post.category=="china" %}
  <tr>
    <td>{{ post.date | date: "%Y-%m-%d" }}</td>
    <td>{{ post.description}}</td>
    <td><a href="{{ post.source_url}}">{{ post.source }}</a></td>
  </tr>
{% endif %}
{%- endfor -%}

</table>

### Other stats

- FBI opens a new case on China every 10 hours
- 100,000 Chinese students come to America every year.
