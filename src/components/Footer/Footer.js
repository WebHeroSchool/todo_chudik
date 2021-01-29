import React from 'react';

const Footer = ({ count }) => (<div>
    <button >Все</button>
    <button>Активные { count }</button>
    <button>Выполненные</button>
</div>);

export default Footer;