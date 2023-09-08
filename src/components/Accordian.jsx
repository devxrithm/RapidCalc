import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
                <h3>{title}</h3>
                <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9650;</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

const Accordian = () => {
    return (
        <div className="App">
            <h1 className="acc-head">FAQs</h1>
            <Accordion
                title="Section 1"
                content="This is the content of section 1."
            />
            <Accordion
                title="Section 2"
                content="This is the content of section 2."
            />
            <Accordion
                title="Section 3"
                content="This is the content of section 2."
            />
            <Accordion
                title="Section 4"
                content="This is the content of section 2."
            />
        </div>
    );
};

export default Accordian;
