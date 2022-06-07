export default function movieHome({ changePage }) {
    return (
      <div className="App">
        <h1>Welcome to my website</h1>
        <h4>Pages:</h4>
        <li style={styles.link} onClick={() => changePage(PAGES.APPLE)}>
          Apple Page
        </li>
        <li style={styles.link} onClick={() => changePage(PAGES.CAT)}>
          Cat Page
        </li>
      </div>
    );
  }