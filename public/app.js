const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playList = $('.playlist')
const heading = $('header h2')
const cdthumb = $('.cd-thumb')
const audio = $('#audio')
const cd = $('.cd')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const next = $('.btn-next')
const prev = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')

const song = [
    {
        name:  1,
        singer: 'unknow',
        path: './music/1.mp3',
        image:  './imageapp/1.jpeg'
    }, 
    {
        name:  2,
        singer: 'unknow',
        path: './music/2.mp3',
        image:  './imageapp/2.jpeg'
    },
    {
        name:  3,
        singer: 'unknow',
        path: './music/3.mp3',
        image:  './imageapp/3.jpeg'
    },
    {
        name:  4,
        singer: 'unknow',
        path: './music/4.mp3',
        image:  './imageapp/4.jpeg'
    },
    {
        name:  5,
        singer: 'unknow',
        path: './music/5.mp3',
        image:  './imageapp/5.jpeg'
    },
    {
        name:  6,
        singer: 'unknow',
        path: './music/6.mp3',
        image:  './imageapp/6.jpeg'
    },
    {
        name:  7,
        singer: 'unknow',
        path: './music/7.mp3',
        image:  './imageapp/7.jpeg'
    }
]

const app = {
    songs:  [
        {
            name:  1,
            singer: 'unknow',
            path: './music/1.mp3',
            image:  './imageapp/1.jpeg'
        }, 
        {
            name:  2,
            singer: 'unknow',
            path: './music/2.mp3',
            image:  './imageapp/2.jpeg'
        },
        {
            name:  3,
            singer: 'unknow',
            path: './music/3.mp3',
            image:  './imageapp/3.jpeg'
        },
        {
            name:  4,
            singer: 'unknow',
            path: './music/4.mp3',
            image:  './imageapp/4.jpeg'
        },
        {
            name:  5,
            singer: 'unknow',
            path: './music/5.mp3',
            image:  './imageapp/5.jpeg'
        },
        {
            name:  6,
            singer: 'unknow',
            path: './music/6.mp3',
            image:  './imageapp/6.jpeg'
        },
        {
            name:  7,
            singer: 'unknow',
            path: './music/7.mp3',
            image:  './imageapp/7.jpeg'
        }
    ],

    currentIndex: 0,
    isplaying: false,
    isRandom: false,
    isRepeat: false,
    render: function() {
        const htmls = app.songs.map((song, index) => {
            return `
                    <div class="song ${index === app.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                    <h3 class="title">${song.name}</h3>
                    <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                    <i class="fas fa-ellipsis-h"></i>
                    </div>
                     </div>
            
                     `
        })
        playList.innerHTML = htmls.join('')
    },

    defineProperties: function(){
        Object.defineProperty(app, 'currentSong', {
            get: function(){
                return  app.songs[app.currentIndex]
            }
        })
    },

    handleEvent: function(){
       

        // Xử lý chức năng random
        randomBtn.onclick = function(){
            app.isRandom = !app.isRandom
            randomBtn.classList.toggle('active', app.isRandom)
            app.playRandom()
        }

        // Xử lý chức năng repeat
        repeatBtn.onclick = function(){
            app.isRepeat = !app.isRepeat
            repeatBtn.classList.toggle('active', app.isRepeat)
        }

        // Xử lý CD quay / dừng 
        const cdRotate = cdthumb.animate([
            { transform: 'rotate(360deg)' }
        ],{
            duration: 10000,
            interation: Infinity
        })
        cdRotate.pause()

        
        const cdWidth = cd.offsetWidth
        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function(){
            const scrollTop = document.documentElement.scrollTop || window.scrollY
            const newcdWidth = cdWidth - scrollTop
            
            // if(newcdWidth > 0){
            //     cd.style.width = newcdWidth + 'px'
            // }else{
            //     cd.style.width = 0
            // }

            cd.style.width = newcdWidth > 0 ? newcdWidth + 'px' : 0
            cd.style.opacity = newcdWidth / cdWidth
        }

        // Xử lý khi click Play
        playBtn.onclick = function(){
            if ( app.isplaying){
                app.isplaying = false
                audio.pause()
                player.classList.toggle('playing')
                cdRotate.pause()
            }else{
                app.isplaying = true
                audio.play()
                player.classList.toggle('playing')
                cdRotate.play()

            }
           

        }

        // Xử lý khi next bài
        next.onclick = function(){
            if(app.isRandom){
                app.playRandom()
            }else{
                app.nextSong()
            }
            audio.play()
            app.render()
            app.scrollToactiveSong()
        },
        prev.onclick = function(){
            if(app.isRandom){
                app.playRandom()
            }else{
                app.prevSong()
            }
            audio.play()
            app.render()

        },


        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
        }

        // Xử lý khi tua 
        progress.onchange = function(e) {
            const seekTime = e.target.value * audio.duration / 100 
            audio.currentTime = seekTime
        }

        // xử lý next song khi audio kết thúc
        audio.onended = function(){ 
            if(app.isRepeat){
                audio.play()
            }else{
                next.click()

            }
        }

        // Lắng nghe click vào playlist
        playList.onclick = function(e){
            const indexSong = (e.target.closest('.song:not(.active)'))

            if(indexSong || e.target.closest('.option')){
                // xử lý khi click vào song
                if(indexSong){
                    app.currentIndex = Number(indexSong.dataset.index)
                    app.loadCurrentSong()
                    audio.play()
                    app.render()
                }
                
            // xử lý khi click vào song option
            if(e.target.closest('.option')){

                 }
            }
        }

    },

    scrollToactiveSong: function(){
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 500)
    },

    loadCurrentSong: function(){
        heading.textContent = app.currentSong.name
        cdthumb.style.backgroundImage = `url('${app.currentSong.image}')`
        audio.src = app.currentSong.path
    },

    nextSong: function(){
        app.currentIndex++
        if (app.currentIndex >= app.songs.length){
            app.currentIndex = 0
        }
        app.loadCurrentSong()
    },
    prevSong: function(){
        app.currentIndex--
        if (app.currentIndex < 0){
            app.currentIndex = app.songs.length -1
        }
        app.loadCurrentSong()
    },

    playRandom: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random() * app.songs.length)
        }while( newIndex === app.currentIndex)
        app.currentIndex = newIndex
        app.loadCurrentSong()
    },

    start: function() {
        // Định nghĩa các thuộc tính cho object
        app.defineProperties()

        // Lắng nghe / xử lý các sự kiến ( Dom Event )
        app.handleEvent()

        // Tải thông tin bài hát hiện tại vào UI khi chạy ứng dụng
        app.loadCurrentSong()

        // Render Playlist
        app.render()
       
        // Play random
        app.playRandom()
    }
}

app.start()