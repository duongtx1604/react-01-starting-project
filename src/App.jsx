import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
    const [selectedTopic, setSelectedTopic] = useState("Please click");

    function handSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedButton);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handSelect("Components")}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handSelect("JSX")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handSelect("Props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handSelect("State")}>
                            State
                        </TabButton>
                    </menu>

                    {selectedTopic}
                </section>
            </main>
        </div>
    );
}

export default App;
