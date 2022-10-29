import React from 'react';
import { faArrowLeft } from "react-icons/fa";

export default function Sidebar(){
    return(
        <div class="sidebar">
            <a class="active" href="/"><i class="fa fa-fw fa-home"></i>Home</a>
            <a href="#news"><i class="fa fa-fw fa-search"></i>Search</a>
            <a href="#contact">Your Library</a>
            <br />
            <a href="#about"><i class="fa fa-fw fa-plus-square-o" aria-hidden="true"></i>Create Playlist</a>
            <a href="#"><i class="fa fa-fw fa-gratipay" aria-hidden="true"></i>
Liked Songs</a>
            <hr />
            <a href="#">My Playlist #1</a>
            <div class="auto">
                <a href="#"><i class="fa fa-fw fa-download" aria-hidden="true"></i>Install App</a>
            </div>
        </div>
    )
} 