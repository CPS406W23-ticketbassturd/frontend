import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Change Account Info</h2>
          <p>This is section 1</p>
          <button>Button 1</button>
        </section>
        <section>
          <h2>Current Tickets</h2>
          <p>This is section 2</p>
          <button>Button 2</button>
        </section>
        <section>
          <h2>Order History</h2>
          <p>This is section 3</p>
          <button>Button 3</button>
        </section>
        <section>
          <h2>Promotions</h2>
          <p>This is section 4</p>
          <button>Button 4</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;