// 1.
class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  // 2.
  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}


// 3.
const video1 = new Video("JavaScript Tutorial", "Elie", 300);
video1.watch();
// Elie watched all 300 seconds of JavaScript Tutorial!


// 4.
const video2 = new Video("CSS Crash Course", "Sarah", 600);
video2.watch();
// Sarah watched all 600 seconds of CSS Crash Course!


// 5.
const videosData = [
  { title: "HTML Basics", uploader: "John", time: 200 },
  { title: "React Intro", uploader: "Anna", time: 900 },
  { title: "Node.js Guide", uploader: "Mike", time: 1200 },
  { title: "Python for Beginners", uploader: "Emma", time: 1800 },
  { title: "Git Tutorial", uploader: "Chris", time: 400 },
];


// 6.
const videos = videosData.map(data => new Video(data.title, data.uploader, data.time));
videos.forEach(video => video.watch());



// OUTPUT :
         // Elie watched all 300 seconds of JavaScript Tutorial!
         // Sarah watched all 600 seconds of CSS Crash Course!
         // John watched all 200 seconds of HTML Basics!
         // Anna watched all 900 seconds of React Intro!
         // Mike watched all 1200 seconds of Node.js Guide!
         // Emma watched all 1800 seconds of Python for Beginners!
         // Chris watched all 400 seconds of Git Tutorial!

