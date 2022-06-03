const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
        {
            name: 'Trả người về tự do',
            singer: 'Cover-music',
            path: '/music/tra-nguoi-ve-tu-do.mp3',
            image: '/img/pic1.jpg'
        },
        {
            name: 'Thương em',
            singer: 'Châu Khải Phong',
            path: '/music/thuong-em.mp3',
            image: '/img/pic2.jpg'
        },
        {
            name: 'Về quê cưới luôn',
            singer: 'Saka Trương Tuyền, Lưu Hưng',
            path: 'https://vnno-vn-5-tf-mp3-320s1-zmp3.zmdcdn.me/7669dad24793aecdf782/2818460558818657888?authen=exp=1654416488~acl=/7669dad24793aecdf782/*~hmac=d6b7196aa097ea79a61b70998f757a95&fs=MTY1NDI0MzY4ODk0MXx3ZWJWNnwwfDExNi4xMDEdUngMTmUsIC1LjIxNw',
            image: 'https://www.filmibeat.com/img/2021/08/janhvikapoor1-1627887583.jpg'
        },
        {
            name: 'As it Was',
            singer: 'Harry Style',
            path: 'https://vnno-zn-5-tf-mp3-320s1-zmp3.zmdcdn.me/34e1fd745235bb6be224/1868658418796321519?authen=exp=1654417141~acl=/34e1fd745235bb6be224/*~hmac=38b6907d9cb2d4212b6a1e04055c0e36&fs=MTY1NDI0NDM0MTA0MHx3ZWJWNnwwfDExNS43NC4yMDMdUngMjAz',
            image: 'https://genk.mediacdn.vn/thumb_w/690/2019/12/12/11-1575883882-width650height762-1576168363318789958220.jpg'
        },
        {
            name: 'Thương quá xá',
            singer: 'Hoon',
            path: 'https://vnno-vn-6-tf-mp3-320s1-zmp3.zmdcdn.me/aa5a9e1a285bc105984a/269208230454083851?authen=exp=1654423752~acl=/aa5a9e1a285bc105984a/*~hmac=5d6e29cf67b9d26334f5104bb7c94009&fs=MTY1NDI1MDk1MjYyNHx3ZWJWNnwxMDAzNDEwMzY1fDExOC43MC4yMzYdUngMTQz',
            image: 'https://image-us.24h.com.vn/upload/4-2020/images/2020-12-04/anh-15-1607072674-608-width650height867.jpg'
        }, 
        {
            name: 'Thương quá xá2',
            singer: 'Hoon',
            path: 'https://vnno-vn-6-tf-mp3-320s1-zmp3.zmdcdn.me/aa5a9e1a285bc105984a/269208230454083851?authen=exp=1654423752~acl=/aa5a9e1a285bc105984a/*~hmac=5d6e29cf67b9d26334f5104bb7c94009&fs=MTY1NDI1MDk1MjYyNHx3ZWJWNnwxMDAzNDEwMzY1fDExOC43MC4yMzYdUngMTQz',
            image: 'https://image-us.24h.com.vn/upload/4-2020/images/2020-12-04/anh-15-1607072674-608-width650height867.jpg'
        },
        {
            name: 'Thương quá xá3',
            singer: 'Hoon',
            path: 'https://vnno-vn-6-tf-mp3-320s1-zmp3.zmdcdn.me/aa5a9e1a285bc105984a/269208230454083851?authen=exp=1654423752~acl=/aa5a9e1a285bc105984a/*~hmac=5d6e29cf67b9d26334f5104bb7c94009&fs=MTY1NDI1MDk1MjYyNHx3ZWJWNnwxMDAzNDEwMzY1fDExOC43MC4yMzYdUngMTQz',
            image: 'https://image-us.24h.com.vn/upload/4-2020/images/2020-12-04/anh-15-1607072674-608-width650height867.jpg'
        }
    ],
    render: function(){
        const htmls = this.songs.map(song => {
            return `
            <div class="song">
            <div class="song-img">
                <img class="song-thumb" src="${song.image}" alt="">
            </div>
            <div class="playlist-content">
                <h2 class="song-name">${song.name}</h2>
                <p>${song.singer}</p>
            </div>
            <i class="song-icon fa-solid fa-ellipsis"></i>
        </div>
        `
        })
       $('.playlist').innerHTML = htmls.join('');
    },
    handleEvents: function(){
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;
        document.onscroll = function (){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            cd.style.width =  newCdWidth > 20  ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth/cdWidth
        }
    },
    start: function(){
        this.handleEvents();
        this.render()
    }
};

app.start();
