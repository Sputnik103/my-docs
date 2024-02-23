---
title: 网易云播放列表功能
tags: 
  - 功能
  - 音乐
---

<style>
p{
text-indent: 2em; /*首行缩进*/
}
</style>

为了给我的网站引入音乐，给浏览的用户（主要是我自己）增加一点使用体验，所以研究了一下如何把喜爱的音乐引入网站。自己下载下来直接播放容易引起版权问题，因此就想着能不能把网易云的歌单直接集成起来。

先尝试了杨哥的做法，通过iframe直接导入单曲，但是这样做有两个问题，一是只能一首歌曲一首歌曲添加，非常的麻烦；二是长得确实不太好看。因此在网上搜了一下别人的做法，在搜索网易云的 API 的时候，发现竟然有人已经写好了：MetingJS，用得是 aplayer，我就去github给了他一个大大的⭐️，并记录下用法。

```html title="引入js"
<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
```

```html title="播放器代码"
<div>
    <meting-js server="netease" type="playlist" id="666375" autoplay="false" list-max-height=1200px>
    </meting-js>
</div>
```

server：指明是网易云音乐还是 QQ 音乐
type：指明是歌单还是一首歌
id：歌单的 ID 或者歌的 ID
autopaly：自动播放
list-max-height：playlist 的最大高度
MetingJS 是显示歌词的，如果不喜欢歌词，可以注释掉 JS 的第 81 行。

```html title="歌词控制"
// lrc: this.meta.lrc || this.meta.lyric || '',
```