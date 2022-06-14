@extends('master.master')

@section('title', 'Bạn đang ở trang sản phẩm')

@section('content')
<div id="banner">
            <div class="box-left">
                <h2>
                    <span>New Album</span>
                    <br>
                    <span>In Coming </span>
                </h2>
                <p>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng
                    hợp vệ sinh đến người dùng,phục vụ người dùng 1 cái
                    hoàn hảo nhất</p>
                <button>Mua ngay</button>
            </div>
            <div class="box-right">
                <img style="height: 250px; border-radius: 15px; width: 150px;" src="Image/photo-1526394931762-90052e97b376.webp" alt="">
                <img style="height: 250px; border-radius: 15px; width: 300px;" src="Image/photo-1499415479124-43c32433a620.webp" alt="">
                <img style="height: 250px; border-radius: 15px; width: 150px;" src="Image/photo-1553649084-3e42773ff0e3.webp" alt="">
            </div>
            <div class="to-bottom">
                <a href="">
                    <img src="assets/to_bottom.png" alt="">
                </a>
            </div>
        </div>
        <div id="wp-products">
            <h2>ALBUM CỦA CHÚNG TÔI</h2>
            <ul id="list-products">
            @foreach($info as $value)
                <div class="item">
                    <img style="height: 150px; width: 250px; border-radius: 15px;" src="{{$value -> anh}}" alt="">
                    <div class="stars">
                        <span>
                            <img src="assets/star.png" alt="">
                        </span>
                        <span>
                            <img src="assets/star.png" alt="">
                        </span>
                        <span>
                            <img src="assets/star.png" alt="">
                        </span>
                        <span>
                            <img src="assets/star.png" alt="">
                        </span>
                        <span>
                            <img src="assets/star.png" alt="">
                        </span>
                    </div>

                    <div class="name">{{$value -> tenalbum}}</div>
                    <div class="desc">Được xuất bản ngày 6/9/2020</div>
                    <div class="price">{{$value -> gia}} $</div>
                </div>
                @endforeach
            </ul>
            <div class="list-page">
                <div class="item">
                    <a href="">1</a>
                </div>
                <div class="item">
                    <a href="">2</a>
                </div>
                <div class="item">
                    <a href="">3</a>
                </div>
                <div class="item">
                    <a href="">4</a>
                </div>
            </div>
        </div>

        <div id="saleoff">
            <div class="box-left">
                <h1>
                    <span>ALBUM GIẢM GIÁ LÊN ĐẾN</span>
                    <span>25%</span>
                </h1>
            </div>
            <div class="box-right"></div>
        </div>

        <div id="comment">
            <h2>FeedBack từ các Nhạc Sĩ đã trải nghiệm các Album</h2>
            <div id="comment-body">
                <div class="prev">
                    <a href="#">
                        <img src="assets/prev.png" alt="">
                    </a>
                </div>
                <ul id="list-comment">
                    <li class="item">
                        <div class="avatar">
                            <img src="assets/avatar_1.png" alt="">

                        </div>
                        <div class="stars">
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                        </div>
                        <div class="name">Nguyễn Đình Vũ</div>

                        <div class="text">
                            <p>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                        </div>
                    </li>
                    <li class="item">
                        <div class="avatar">
                            <img src="assets/avatar_1.png" alt="">

                        </div>
                        <div class="stars">
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                        </div>
                        <div class="name">Trần Ngọc Sơn</div>

                        <div class="text">
                            <p>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                        </div>
                    </li>
                    <li class="item">
                        <div class="avatar">
                            <img src="assets/avatar_1.png" alt="">

                        </div>
                        <div class="stars">
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                            <span>
                                <img src="assets/star.png" alt="">
                            </span>
                        </div>
                        <div class="name">Nguyễn Trần Vi</div>

                        <div class="text">
                            <p>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type
                                specimen book.</p>
                        </div>
                    </li>
                </ul>
                <div class="next">
                    <a href="#">
                        <img src="assets/next.png" alt="">
                    </a>
                </div>
            </div>
        </div>
@endsection