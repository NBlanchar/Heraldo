import React from 'react';
const Nav = () =>{
    return(
    <div class="container">
        <nav class="n navbar navbar-inverse" data-spy="affix" data-offset-top="97">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Heraldo</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a class="link" href="#">Home</a></li>
              <li><a class="link" href="https://www.elheraldo.co/nacional">Pais</a></li>
              <li><a class="link" href="https://www.elheraldo.co/judicial">Judiciales</a></li>
              <li><a class="link" href="https://www.elheraldo.co/deportes">Deportes</a></li>
              <li><a class="link" href="https://www.elheraldo.co/sociedad">Sociedad</a></li>
              <li><a class="link" href="https://www.elheraldo.co/politica">Politica</a></li>
            </ul>
            <form class="navbar-form navbar-left">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search" name="search"/>
                <div class="input-group-btn">
                  <button class="btn btn-default" type="submit">
                    <i class="glyphicon glyphicon-search"></i>
                  </button>
                </div>
              </div>
            </form>
        </nav>
    </div>
    )
}

export default Nav;