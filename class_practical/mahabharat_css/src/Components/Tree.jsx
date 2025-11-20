import "./tree.css"


const Tree = () => {
    return (
        <>
            <div className="tree-container">
                <h1 className="tree-title">Mahabharata Family Tree</h1>
                <li>
                    <div className="node">King Shantanu</div>
                    <ul>
                        <li>
                            <div className="node small">(Wife: Ganga)</div>
                            <ul>
                                <li>
                                    <div className="node">Bhishma</div>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <div className="node small">(Wife: Satyavati)</div>
                            <ul>
                                <li>
                                    <div className="node">Chitrangada</div>
                                </li>
                                <li>
                                    <div className="node">Vichitravirya</div>
                                    <ul>
                                        <li>
                                            <div className="node note">(Niyoga by Vyasa)</div>
                                            <ul>
                                                <li>
                                                    <div className="node">Dhritarashtra</div>
                                                    <ul>
                                                        <li>
                                                            <div className="node small">(Wife: Gandhari)</div>
                                                            <ul>
                                                                <li>
                                                                    <div className="node">Kauravas<br /><span className="muted">(100 sons + 1 daughter: Duhsala)</span></div>
                                                                    <ul>
                                                                        <li>
                                                                            <div className="node">Duryodhana</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="node">Dushasana</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="node">Vikarna</div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="node">Duhsala (daughter)</div>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li>
                                                                    <div className="node">Yuyutsu (son by maid)</div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>

                                                <li>
                                                    <div className="node">Pandu</div>
                                                    <ul>
                                                        <li>
                                                            <div className="node small">(Wife: Kunti)</div>
                                                            <ul>
                                                                <li>
                                                                    <div className="node">Yudhishthira<br /><span className="muted">(son of Yama)</span></div>
                                                                </li>
                                                                <li>
                                                                    <div className="node">Bhima<br /><span className="muted">(son of Vayu)</span></div>
                                                                </li>
                                                                <li>
                                                                    <div className="node">Arjuna<br /><span className="muted">(son of Indra)</span></div>
                                                                </li>
                                                                <li>
                                                                    <div className="node small">Karna<br /><span className="muted">(born to Kunti by Surya before marriage)</span></div>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li>
                                                            <div className="node small">(Wife: Madri)</div>
                                                            <ul>
                                                                <li>
                                                                    <div className="node">Nakula<br /><span className="muted">(son of Ashwini Kumar)</span></div>
                                                                </li>
                                                                <li>
                                                                    <div className="node">Sahadeva<br /><span className="muted">(son of Ashwini Kumar)</span></div>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <div className="node">Vidura</div>
                                                </li>


                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <div className="node">Yudhishthira</div>
                    <ul>
                        <li>
                            <div className="node">Yaudheya</div>
                        </li>
                    </ul>
                </li>


                <li>
                    <div className="node">Nakula</div>
                    <ul>
                        <li>
                            <div className="node">Shatanika</div>
                        </li>
                    </ul>
                </li>


                <li>
                    <div className="node">Sahadeva</div>
                    <ul>
                        <li>
                            <div className="node">Suhotra</div>
                        </li>
                    </ul>
                </li>


                <li>
                    <div className="node">Kauravas (selected)</div>
                    <ul>
                        <li>
                            <div className="node">Lakshmana Kumara (son of Duryodhana)</div>
                        </li>
                    </ul>
                </li>

                <p className="caption">This tree is a structured view; expand or collapse as needed in your app. Styles are in <code>MahabharataTree.css</code>.</p>
            </div >
        </>
    )
}

export default Tree;