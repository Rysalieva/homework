import React from "react";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";

const App = () => {
    const titleData = {
        title: "Заголовок",
        subtitle: "Подзаголовок"
    };

    return (
        <div>
            <Title title={titleData.title} subtitle={titleData.subtitle} />
            <About />
        </div>
    );
};

export default App;
