// Main.js
import React from "react";
import Event from "./Event"; // Подразумевается, что Event также оптимизирован

const Main = () => {
  const ref = React.useRef();
  const [activeTab, setActiveTab] = React.useState("");

  React.useEffect(() => {
    setActiveTab(new URLSearchParams(location.search).get("tab") || "all");
  }, []);

  const onSelectInput = (event) => {
    setActiveTab(event.target.value);
  };

  return (
    <main className="main">
      <section className="section main__general">
        <h2 className="section__title">Главное</h2>
        <p>Привет, Геннадий!</p>
        <p>Двери и окна закрыты, сигнализация включена.</p>
        <div>
          <Event icon="temp" title="Температура в комнате" value="+23°C" />
          <Event icon="humidity" title="Влажность воздуха" value="45%" />
        </div>
      </section>
      <section className="section main__devices">
        <div className="section__title">
          <h2 className="section__title-header">Избранные устройства</h2>

          <select
            className="section__select"
            defaultValue="all"
            onInput={onSelectInput}
          >
            {TABS_KEYS.map((key) => (
              <option key={key} value={key}>
                {TABS[key].title}
              </option>
            ))}
          </select>

          <ul role="tablist" className="section__tabs">
            {TABS_KEYS.map((key) => (
              <li
                key={key}
                role="tab"
                aria-selected={key === activeTab ? "true" : "false"}
                tabIndex={key === activeTab ? "0" : undefined}
                className={
                  "section__tab" +
                  (key === activeTab ? " section__tab_active" : "")
                }
                id={`tab_${key}`}
                aria-controls={`panel_${key}`}
                onClick={() => setActiveTab(key)}
              >
                {TABS[key].title}
              </li>
            ))}
          </ul>
        </div>

        <div className="section__panel-wrapper" ref={ref}>
          {TABS_KEYS.map((key) => (
            <div
              key={key}
              role="tabpanel"
              className={
                "section__panel" +
                (key === activeTab ? "" : " section__panel_hidden")
              }
              aria-hidden={key === activeTab ? "false" : "true"}
              id={`panel_${key}`}
              aria-labelledby={`tab_${key}`}
            >
              <ul className="section__panel-list">
                {TABS[key].items.map((item, index) => (
                  <Event key={index} {...item} onSize={onSize} />
                ))}
              </ul>
            </div>
          ))}
          {hasRightScroll && (
            <div className="section__arrow" onClick={onArrowCLick}></div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Main;
