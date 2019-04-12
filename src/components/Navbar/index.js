import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">Clicky Game</span>
            <span class="navbar-brand mb-0 h1" id='navbar-item1'>Guess a pic</span>
            <span class="navbar-brand mb-0 h1 score-display">score: 0</span>
        </nav>
    );
}

export default Nav;
