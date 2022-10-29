import React from 'react';



export default function Navigation (){
    return(
          <nav class="navbar navbar-expand-lg navbar-dark naav">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><h2>BRAND</h2></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class=" nav-item">
                    <a class="nav-link " aria-current="page" href="main">Premium</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link " href="#">Support</a>
                    </li>
                    <li class="nav-item ">
                     <a class="nav-link" href="download">Download</a> 
                    </li>
                    <li class="nav-link">
                    |
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="signin">Sign up</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="login">Log in</a>
                    </li>
                    
                </ul>
                </div>
            </div>
          </nav>
       
    )
}