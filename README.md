
<p align="center">
        <img src="https://badgen.net/github/commits/jmchor/drumrecords_front/main" />
        <img src="https://img.shields.io/github/languages/count/jmchor/drumrecords_front?color="green" />
        <img src="https://img.shields.io/github/languages/top/jmchor/drumrecords_front?color=yellow" />
        <img src="https://badges.aleen42.com/src/vitejs.svg" />
        <img src="https://badges.aleen42.com/src/react.svg" />
        <img src="https://badges.aleen42.com/src/react-router.svg" />

</p>
</br>

<p align="center">
<img src="images/../public/images/drums.svg" alt="drums" width="500px"/>
</p>

<h1 align="center">drumRecords</h1>

<p align="center">Frontend code repo</p>
<p align="center">To see the backend code, please click <b><a href="https://github.com/jcmhor/drumrecords_back">here</a></b></p>

</br>

<div align="center" style="font-size: 16px">
  This is interesting for you if you are

  </br>

<p align="center"> a) a seasoned drummer </p>
<p align="center"> b) a new drummer </p>
<p align="center"> c) a drumming enthusiast </p>
<p align="center"> d) all of the above</p>

</br>

  and you just don't know what to practice or where to get new ideas, or "how is that part in that song actually played?"

</div>

  <p align="center" style="font-size: 18px">Fear not - <b>drumRecords is <a href="https://useum.netlify.app/" target="_blank">here</a></b></p>

---

</br>

## Description

I had the idea while scrolling through my Instagram feed where tons and tons of drum videos came up. I wanted to play a specific section of a song, and by pure coincidence, came across a "how to" video by a drummer. I saved the video, and went back to it a lot. Opening the Instagram App and getting to my saved videos and then finding it was a bit much, I felt. So I wrote this.

</br>

### Functionality

Essentially, I'm embedding Instagram URLs - that's the whole magic. Sadly, saved posts and such don't belong to the data you can fetch with the Insta API (or else this would have been even more convenient). That's why this app provides:

- An Admin dashboard (which is essentially for me):
  - here I can add new videos with a simple form
  - or delete them if the URL is not working anymore or I don't like the video, or...
- A random video right on the landing page - if you feel like you just wanna do anything new, spin up the page and play what's there!
- A collection of all videos - and you can sort them by category!

The app is deployed using Render for the React frontend as well as the Node backend (using a webservice)

</br>

## Technologies

Aside from the usual stuff (as a Vite app I used Vite) there are a few things I really liked and relied on:

- [react-social-media-embed](https://www.npmjs.com/package/react-instagram-embed)
  - making embedding social media links incredibly convenient
- [react-device-detect](https://www.npmjs.com/package/react-device-detect)
  - a fun gimmick to show the currently used browser with version
- [react-spinners](https://www.npmjs.com/package/react-spinners)
  - very helpful to keep loading screens interesting

  </br>

</br>

<h2 align="center"> Contributors </h2>

</br>

<div align="center">
  <a href="https://github.com/jmchor/activity_logger/graphs/contributors" >
    <img src="https://avatars.githubusercontent.com/u/110151013?v=4" width="100"/>

  </a>
</div>

</br>

<p align="center">This project was realized by <a href="https://github.com/jmchor">me</a>, with many thanks to Meta (for Instagram and making React and such) as well as to all those artists who put their skills into the cloud for all to share!</p>
