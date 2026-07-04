const reels = [
  {
    username: "travelwithriya",
    likeCount: 12850,
    isLiked: false,
    commentCount: 324,
    caption: "Lost in the mountains. 🌄",
    video: "./reels/reel1.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/1.jpg",
    shareCount: 182,
    isFollowed: false
  },
  {
    username: "fitness_rahul",
    likeCount: 24780,
    isLiked: false,
    commentCount: 691,
    caption: "No excuses. Just results. 💪",
   video: "./reels/reel2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/2.jpg",
    shareCount: 421,
    isFollowed: true
  },
  {
    username: "foodie_anu",
    likeCount: 18920,
    isLiked: false,
    commentCount: 415,
    caption: "Street food never disappoints! 🍜",
  video: "./reels/reel3.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/3.jpg",
    shareCount: 298,
    isFollowed: false
  },
  {
    username: "techworld",
    likeCount: 31200,
    isLiked: false,
    commentCount: 853,
    caption: "Top 5 coding shortcuts every developer should know. 💻",
    video: "./reels/reel4.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/4.jpg",
    shareCount: 790,
    isFollowed: true
  },
  {
    username: "nature_clicks",
    likeCount: 15640,
    isLiked: false,
    commentCount: 286,
    caption: "Nature heals everything. 🌿",
   video: "./reels/reel5.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/5.jpg",
    shareCount: 143,
    isFollowed: false
  },
];
 let sum = 0
reels.forEach(function(elem){
    sum = sum + ` <div class="reel">
                      <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                       <div class="user">
                         <img src="${elem.userProfile}" alt="">
                          <h4>${elem.username}</h4>
                          <button>${elem.isFollowed?"unfollow":"follow"}</button>
                        </div>
                           <div class="caption"><p>${elem.caption}</p></div>
                    </div>
                    <div class="right">
                       <div class="like"> 
                        <h4 ><i class="ri-heart-3-line"></i></h4>
                        <h2>${elem.likeCount}</h2>
                      </div>
                       <div class="comment">
                         <h4><i class="ri-chat-1-line"></i></h4>
                        <h2>${elem.commentCount}</h2>
                    </div>
                       <div class="share">
                        <h4><i class="ri-share-line"></i></h4>
                        <h2>${elem.shareCount}</h2>
                    </div>
                       <div class="menu"> <h4><i class="ri-more-2-fill"></i></h4></div>
                    </div>
                </div>`
})

let allReels = document.querySelector(".all-reels")
allReels.innerHTML = sum