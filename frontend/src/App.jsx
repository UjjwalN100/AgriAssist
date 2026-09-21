import { useState } from "react";
import "./App.css";

function App() {
    const schemes = [
    {
      id: 1,
      government: "india",
      governmentLabel: "GOVERNMENT OF INDIA",
      name: "PM-KISAN",
      icon: "🇮🇳",
      description:
        "Income support scheme for eligible landholding farmer families under the Government of India.",
      category: "Financial Support",
      officialUrl: "https://pmkisan.gov.in/",
    },
    {
      id: 2,
      government: "india",
      governmentLabel: "GOVERNMENT OF INDIA",
      name: "PM Fasal Bima Yojana",
      icon: "🌾",
      description:
        "A crop insurance scheme designed to provide financial protection against specified crop losses.",
      category: "Crop Insurance",
      officialUrl: "https://pmfby.gov.in/",
    },
    {
      id: 3,
      government: "maharashtra",
      governmentLabel: "MAHARASHTRA",
      name: "Micro-Irrigation",
      icon: "💧",
      description:
        "Explore Maharashtra agriculture department support related to micro-irrigation components.",
      category: "Irrigation",
      officialUrl: "https://mahadbt.maharashtra.gov.in/",
    },
    {
      id: 4,
      government: "maharashtra",
      governmentLabel: "MAHARASHTRA",
      name: "Farm Mechanization",
      icon: "🚜",
      description:
        "Explore agricultural support related to farm mechanization under Maharashtra's agriculture schemes.",
      category: "Farm Mechanization",
      officialUrl: "https://mahadbt.maharashtra.gov.in/",
    },
  ];
    const [crop, setCrop] = useState("");
  const [season, setSeason] = useState("");
  const [irrigation, setIrrigation] = useState("");
  const [need, setNeed] = useState("");
  const [guidance, setGuidance] = useState("");
    const [guidancePoints, setGuidancePoints] = useState([]);
    const [schemeFilter, setSchemeFilter] = useState("all");
    const [selectedScheme, setSelectedScheme] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const generateGuidance = () => {
    if (!crop || !season || !irrigation || !need) {
  setGuidance("Please complete all four fields before generating guidance.");
  setGuidancePoints([]);
  return;
}
let points = [];

if (need === "crop") {
  points = [
    `Review the requirements and common practices for ${crop} during the ${season} season.`,
    "Consider local weather, field conditions, and the crop's growth requirements.",
    "Use reliable agricultural sources or professional guidance for crop-specific decisions.",
  ];
} else if (need === "fertilizer") {
  points = [
    "Consider soil testing before making fertilizer decisions.",
    "Use soil-test results together with crop requirements for balanced nutrient management.",
    "Avoid applying fertilizer only on the basis of a general recommendation.",
  ];
} else if (need === "irrigation") {
  points = [
    `Consider the water requirements of ${crop} during the ${season} season.`,
    `Monitor soil moisture and field conditions when using ${irrigation} irrigation.`,
    "Avoid unnecessary water application and adjust irrigation according to field conditions.",
  ];
} else if (need === "schemes") {
  points = [
    "Explore potentially relevant agricultural schemes in the Government Schemes section.",
    "Check the official government portal for current eligibility and application conditions.",
    "Verify scheme availability and requirements before applying.",
  ];
}

    let result = "";

    if (need === "crop") {
  result =
    `For ${crop} during the ${season} season, focus on the crop's growing requirements, ` +
    "local weather conditions, soil status, and field conditions. Use reliable " +
    "agricultural sources or professional guidance for crop-specific decisions.";
} else if (need === "fertilizer") {
  result =
    "Before making fertilizer decisions, consider getting the soil tested. " +
    "Use soil-test results together with the crop requirement to support balanced " +
    "nutrient management, rather than relying only on general recommendations.";
} else if (need === "irrigation") {
  result =
    `For ${crop} during the ${season} season, consider crop water requirements, ` +
    `soil moisture, field conditions, and your ${irrigation} irrigation method. ` +
    "Monitor the field regularly and avoid unnecessary water application.";
} else if (need === "schemes") {
  result =
    "AgriAssist can help you identify potentially relevant agricultural support. " +
    "Use the Government Schemes section to explore options and always verify " +
    "current eligibility, application conditions, and availability through the official portal.";
}

    setGuidance(result);
setGuidancePoints(points);
  };
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">🌱</span>
          <span>AgriAssist</span>
        </div>

        <button
  type="button"
  className="menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
>
  ☰
</button>

        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#assessment">Farm Assessment</a>
          <a href="#crops">Crop Guidance</a>
          <a href="#schemes">Government Schemes</a>
          <a href="#insights-dashboard">Field Insights</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
  <div className="hero-content">
    <p className="hero-tag">FIELD-STUDY-BASED AGRICULTURE PLATFORM</p>

    <h1>
      Smarter decisions
      <span> for better farming.</span>
    </h1>

    <p className="hero-description">
      AgriAssist brings agricultural guidance, farming resources,
      government schemes, and field-study insights together in one
      easy-to-use platform.
    </p>

    <div className="hero-buttons">
      <a href="#assessment" className="primary-button">
        Start Farm Assessment
      </a>

      <a href="#schemes" className="secondary-button">
        Explore Government Schemes
      </a>
    </div>

    <div className="hero-note">
      Built from field observations and agricultural insights collected
      from the Nashik farming community.
    </div>
  </div>
</section>
<section className="features-section">
  <div className="section-heading">
    <p className="section-tag">WHAT AGRIASSIST DOES</p>

    <h2>
      Agriculture information,
      <span> organized around your needs.</span>
    </h2>

    <p>
      Explore practical agricultural guidance, identify relevant
      government support, and understand insights collected from
      our field study.
    </p>
  </div>

  <div className="feature-grid">
    <article className="feature-card">
      <div className="feature-icon">🌱</div>

      <h3>Farm Assessment</h3>

      <p>
        Enter basic information about your crop and farming situation
        to explore relevant agricultural guidance.
      </p>

      <a href="#assessment">Explore assessment →</a>
    </article>

    <article className="feature-card">
      <div className="feature-icon">📚</div>

      <h3>Crop & Farming Guidance</h3>

      <p>
        Find organized information about crops, fertilizer practices,
        soil considerations, and irrigation methods.
      </p>

      <a href="#crops">Explore guidance →</a>
    </article>

    <article className="feature-card">
      <div className="feature-icon">🏛️</div>

      <h3>Government Schemes</h3>

      <p>
        Explore agricultural schemes from the Government of India
        and Maharashtra through a simple searchable interface.
      </p>

      <a href="#schemes">Find schemes →</a>
    </article>
  </div>
</section>

<section id="insights" className="field-study-section">
  <div className="field-study-content">
    <div className="field-study-text">
      <p className="section-tag">OUR FIELD STUDY</p>

      <h2>
        Built from
        <span> real field observations.</span>
      </h2>

      <p className="field-study-description">
        AgriAssist is based on observations and interactions carried
        out during our agricultural field study in the Nashik region.
        We visited a local farm and a fertilizer company to understand
        farming practices, fertilizer usage, irrigation methods, and
        challenges faced by farmers.
      </p>

      <div className="field-study-points">
        <div className="field-point">
          <div className="field-point-icon">👨‍🌾</div>

          <div>
            <h3>Farmer Interactions</h3>
            <p>
              Conversations with farmers helped us understand
              practical challenges and farming practices.
            </p>
          </div>
        </div>

        <div className="field-point">
          <div className="field-point-icon">💧</div>

          <div>
            <h3>Irrigation Observations</h3>
            <p>
              We observed the use of drip irrigation and its role
              in water-efficient farming.
            </p>
          </div>
        </div>

        <div className="field-point">
          <div className="field-point-icon">🏭</div>

          <div>
            <h3>Industry Insights</h3>
            <p>
              Our visit to Agrifert provided insights into fertilizer
              production, quality checks, and farmer support.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="field-study-card">
      <div className="field-study-card-top">
        <span>FIELD STUDY</span>
        <span>2025</span>
      </div>

      <div className="field-study-stat">
        <strong>2</strong>
        <span>Field locations visited</span>
      </div>

      <div className="field-study-stat">
        <strong>4+</strong>
        <span>Farmer observations recorded</span>
      </div>

      <div className="field-study-stat">
        <strong>1</strong>
        <span>Industry interaction</span>
      </div>

      <div className="field-study-card-footer">
        Nashik Region · Agriculture Field Study
      </div>
    </div>
  </div>
</section>
<section id="assessment" className="assessment-section">
  <div className="assessment-heading">
    <p className="section-tag">FARM ASSESSMENT</p>

    <h2>
      Tell us about
      <span> your farm.</span>
    </h2>

    <p>
      Provide a few basic details about your farming situation.
      AgriAssist will use this information to organize relevant
      agricultural guidance.
    </p>
  </div>

  <div className="assessment-card">
    <div className="form-group">
      <label htmlFor="crop">What crop are you growing?</label>

      <select
  id="crop"
  value={crop}
  onChange={(e) => setCrop(e.target.value)}
>
        <option value="">Select a crop</option>
        <option value="tomato">Tomato</option>
        <option value="brinjal">Brinjal</option>
        <option value="onion">Onion</option>
        <option value="maize">Maize</option>
        <option value="cotton">Cotton</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="season">What is the farming season?</label>

      <select
  id="season"
  value={season}
  onChange={(e) => setSeason(e.target.value)}
>
        <option value="">Select a season</option>
        <option value="kharif">Kharif</option>
        <option value="rabi">Rabi</option>
        <option value="summer">Summer</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="irrigation">What irrigation method do you use?</label>

      <select
  id="irrigation"
  value={irrigation}
  onChange={(e) => setIrrigation(e.target.value)}
>
        <option value="">Select irrigation method</option>
        <option value="drip">Drip Irrigation</option>
        <option value="flood">Flood Irrigation</option>
        <option value="sprinkler">Sprinkler</option>
        <option value="other">Other</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="need">What do you need help with?</label>

      <select
  id="need"
  value={need}
  onChange={(e) => setNeed(e.target.value)}
>
        <option value="">Select your requirement</option>
        <option value="crop">Crop Guidance</option>
        <option value="fertilizer">Fertilizer & Soil</option>
        <option value="irrigation">Irrigation</option>
        <option value="schemes">Government Schemes</option>
      </select>
    </div>

    <button
  type="button"
  className="assessment-button"
  onClick={generateGuidance}
>
  Generate Guidance
</button>
  </div>
            {guidance && (
            <div className="guidance-result">
              <div className="guidance-result-icon">🌱</div>

              <div>
                <p className="guidance-result-label">
                  AGRIASSIST GUIDANCE
                </p>

                <h3>Your assessment result</h3>

                <p>{guidance}</p>
                              <ul className="guidance-points">
                {guidancePoints.map((point, index) => (
                  <li key={index}>
                    <span>✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              </div>
            </div>
          )}
</section>
        <section id="crops" className="crops-section">
          <div className="crops-heading">
            <p className="section-tag">CROP & FARMING GUIDANCE</p>

            <h2>
              Practical guidance for
              <span> everyday farming decisions.</span>
            </h2>

            <p>
              Explore organized information about crops, soil, fertilizer
              practices, irrigation, and common farming considerations.
            </p>
          </div>

          <div className="crop-grid">
            <article className="crop-card">
              <div className="crop-icon">🌾</div>

              <h3>Crop Selection</h3>

              <p>
                Understand basic crop considerations based on season,
                farming conditions, and local agricultural practices.
              </p>

              <div className="crop-topics">
                <span>Kharif</span>
                <span>Rabi</span>
                <span>Summer</span>
              </div>
            </article>

            <article className="crop-card">
              <div className="crop-icon">🌱</div>

              <h3>Soil & Fertilizer</h3>

              <p>
                Learn about soil testing, balanced fertilizer use, and
                the importance of considering soil conditions before application.
              </p>

              <div className="crop-topics">
                <span>Soil Testing</span>
                <span>Nutrients</span>
                <span>Fertilizer</span>
              </div>
            </article>

            <article className="crop-card">
              <div className="crop-icon">💧</div>

              <h3>Irrigation</h3>

              <p>
                Explore irrigation methods and water-management considerations
                for different farming situations.
              </p>

              <div className="crop-topics">
                <span>Drip</span>
                <span>Sprinkler</span>
                <span>Water Management</span>
              </div>
            </article>

            <article className="crop-card">
              <div className="crop-icon">🔍</div>

              <h3>Field Considerations</h3>

              <p>
                Consider climate, rainfall, soil condition, irrigation,
                and crop requirements when planning farming activities.
              </p>

              <div className="crop-topics">
                <span>Climate</span>
                <span>Rainfall</span>
                <span>Field Conditions</span>
              </div>
            </article>
          </div>

          <div className="guidance-note">
            <strong>Field-study insight:</strong> Our field study highlighted
            the importance of soil awareness, appropriate fertilizer practices,
            irrigation management, and access to reliable agricultural guidance.
          </div>
        </section>
<section id="schemes" className="schemes-section">
  <div className="schemes-heading">
    <p className="section-tag">GOVERNMENT SUPPORT</p>

    <h2>
      Discover schemes that can
      <span> support your farm.</span>
    </h2>

    <p>
      Explore agricultural schemes from the Government of India
      and Maharashtra and find official sources for more information.
    </p>
  </div>

  <div className="scheme-filters">
    <button
  className={`scheme-filter ${
    schemeFilter === "all" ? "active" : ""
  }`}
  onClick={() => setSchemeFilter("all")}
>
  All Schemes
</button>

    <button
  className={`scheme-filter ${
    schemeFilter === "india" ? "active" : ""
  }`}
  onClick={() => setSchemeFilter("india")}
>
  🇮🇳 Government of India
</button>

    <button
  className={`scheme-filter ${
    schemeFilter === "maharashtra" ? "active" : ""
  }`}
  onClick={() => setSchemeFilter("maharashtra")}
>
  🏛️ Maharashtra
</button>
  </div>

  <div className="scheme-grid">
    {schemes
  .filter(
    (scheme) =>
      schemeFilter === "all" ||
      scheme.government === schemeFilter
  )
  .map((scheme) => (
    <article className="scheme-card" key={scheme.id}>
      <div className="scheme-card-top">
        <span className="scheme-government">
          {scheme.governmentLabel}
        </span>

        <span className="scheme-icon">
          {scheme.icon}
        </span>
      </div>

      <h3>{scheme.name}</h3>

      <p>{scheme.description}</p>

      <div className="scheme-category">
        {scheme.category}
      </div>

      <button
  className="scheme-details-button"
  onClick={() => setSelectedScheme(scheme)}
>
  View Details →
</button>
    </article>
  ))}    
  </div>

  <div className="scheme-note">
    <strong>Important:</strong> Scheme eligibility, benefits,
    application conditions, and availability can change.
    Always verify current details through the official government
    portal before applying.
  </div>
</section>
        {selectedScheme && (
          <div className="scheme-details-panel">
            <div className="scheme-details-header">
              <div>
                <p className="section-tag">SCHEME DETAILS</p>

                <h3>{selectedScheme.name}</h3>
              </div>

              <button
                type="button"
                className="scheme-close-button"
                onClick={() => setSelectedScheme(null)}
              >
                ×
              </button>
            </div>

            <div className="scheme-details-content">
              <p>
                {selectedScheme.description}
              </p>
              <a
  href={selectedScheme.officialUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="scheme-official-link"
>
  Visit Official Government Portal →
</a>

              <div className="scheme-detail-row">
                <span>Government</span>
                <strong>{selectedScheme.governmentLabel}</strong>
              </div>

              <div className="scheme-detail-row">
                <span>Category</span>
                <strong>{selectedScheme.category}</strong>
              </div>

              <div className="scheme-detail-note">
                <strong>Important:</strong> This information is provided
                for guidance. Eligibility, benefits, application conditions,
                and availability may change. Always verify the current
                details through the official government portal.
              </div>
            </div>
          </div>
        )}
                <section id="insights-dashboard" className="insights-dashboard-section">
          <div className="insights-dashboard-heading">
            <p className="section-tag">FIELD STUDY INSIGHTS</p>

            <h2>
              What we learned
              <span> from the field.</span>
            </h2>

            <p>
              This dashboard summarizes observations collected during our
              agricultural field study and highlights the areas that influenced
              the design of AgriAssist.
            </p>
          </div>

          <div className="insight-summary-grid">
            <div className="insight-summary-card">
              <span className="insight-summary-icon">👨‍🌾</span>
              <strong>Farmer Interactions</strong>
              <span>Practical farming observations</span>
            </div>

            <div className="insight-summary-card">
              <span className="insight-summary-icon">💧</span>
              <strong>Irrigation</strong>
              <span>Water-management observations</span>
            </div>

            <div className="insight-summary-card">
              <span className="insight-summary-icon">🌱</span>
              <strong>Soil & Fertilizer</strong>
              <span>Input-management observations</span>
            </div>

            <div className="insight-summary-card">
              <span className="insight-summary-icon">🏭</span>
              <strong>Industry Interaction</strong>
              <span>Fertilizer-industry insights</span>
            </div>
          </div>

          <div className="insights-main-grid">
            <div className="insights-observations-card">
              <div className="insights-card-header">
                <div>
                  <p className="insights-card-label">KEY OBSERVATIONS</p>
                  <h3>Recurring areas identified during fieldwork</h3>
                </div>
              </div>

              <div className="observation-list">
                <div className="observation-item">
                  <span>01</span>
                  <div>
                    <h4>Weather & rainfall uncertainty</h4>
                    <p>
                      Field observations highlighted the importance of
                      unpredictable weather and rainfall conditions in farming.
                    </p>
                  </div>
                </div>

                <div className="observation-item">
                  <span>02</span>
                  <div>
                    <h4>Soil & fertilizer awareness</h4>
                    <p>
                      Fertilizer practices and the importance of understanding
                      soil conditions emerged as important areas for guidance.
                    </p>
                  </div>
                </div>

                <div className="observation-item">
                  <span>03</span>
                  <div>
                    <h4>Irrigation management</h4>
                    <p>
                      Drip irrigation was observed during the field study,
                      highlighting the role of water-efficient irrigation
                      practices.
                    </p>
                  </div>
                </div>

                <div className="observation-item">
                  <span>04</span>
                  <div>
                    <h4>Access to government support</h4>
                    <p>
                      Government schemes and farmer-support information were
                      identified as an area where accessible guidance can help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="insights-impact-card">
              <p className="insights-card-label">PROJECT RESPONSE</p>

              <h3>
                From field observation
                <span> to digital support.</span>
              </h3>

              <div className="impact-item">
                <span>🌦️</span>
                <div>
                  <strong>Field challenge</strong>
                  <p>Uncertain farming conditions</p>
                </div>
              </div>

              <div className="impact-arrow">↓</div>

              <div className="impact-item">
                <span>💻</span>
                <div>
                  <strong>AgriAssist response</strong>
                  <p>Organized agricultural decision support</p>
                </div>
              </div>

              <div className="impact-arrow">↓</div>

              <div className="impact-item">
                <span>📚</span>
                <div>
                  <strong>Useful outcome</strong>
                  <p>Guidance, resources, and official support links</p>
                </div>
              </div>
            </div>
          </div>

          <div className="insights-footer-note">
            <strong>Field-study basis:</strong> These insights represent
            observations from our project fieldwork and are presented as
            project findings, not as a statistical survey of all farmers.
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;