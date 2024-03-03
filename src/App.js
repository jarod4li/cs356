// App.js
import React, { useState } from 'react';
import Tabs from './Tabs';
import Card from './Card';
import './styles.css';


const App = () => {
  // Example data structure with hierarchy
  const [quotes, setQuotes] = useState([
    {
      category: 'CS110',
      quotes: [
        'Introduction to programming and computer science for those with no prior programming experience. Focuses on the basic aspects of programming, with an emphasis on core principles. Labs provide a supportive environment to learn how to program with peers. Weekly discussions will introduce some of the many ways computer science interacts with society. Programming assignments will demonstrate how to use computing in a variety of disciplines. '
        // Add more quotes here
      ],
    },
    {
      category: 'CS111',
      quotes: [
        'Teaches how to design, develop, reason about, and test programs. Topics include higher-order functions, object-oriented programming, recursion, algorithms, data structures, decomposition, interpreters, and regular expressions.'
        // Add more quotes here
      ],
    },
    {
      category: 'CS142',
      quotes: [
        'Introduction to object-oriented program design and development. Principles of algorithm formulation and implementation.'

        // Add more quotes here
      ],
    },
    {
      category: 'CS224',
      quotes: [
        'How a computer works to execute sequential code: low level data representation and abstraction, the relationship between C and assembly, computer architecture and pipelining, the memory hierarchy, dynamic memory allocation, and linking.'
      ],
    },
    {
      category: 'CS235',
      quotes: [
        'Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.'
        // Add more quotes here
      ],
    },
    {
      category: 'CS240',
      quotes: [
        'Advanced software development with an object-oriented focus. Design, implementation, and testing of medium-sized programs including a server program.'
        // Add more quotes here
      ],
    },
      {
      category: 'CS260',
      quotes: [
        'Introduction to web application design and implementation. Both front end and back end development with an emphasis on REST architectures.'
      ],
    },
    {
      category: 'CS312',
      quotes: [
        'A study of the design and analysis of algorithms as solutions to problems, including dynamic programming, linear programming, greedy algorithms, divide-and-conquer algorithms, graph algorithms, and intelligent search algorithms.'
        // Add more quotes here
      ],
    },
    {
      category: 'CS324',
      quotes: [
        'Systems programming principles and concepts, including Linux systems programming, multiprocessing, concurrency, exceptional control flow, caching, sockets, protocols, and non-blocking I/O.'
        // Add more quotes here
      ],
    },
  ]);

  const [activeCategory, setActiveCategory] = useState(null);

  const filterQuotesByCategory = (category) => {
    if (!category) return quotes.flatMap(q => q.quotes);
    const categoryObj = quotes.find(cat => cat.category === category);
    return categoryObj ? categoryObj.quotes : [];
  };

  return (
    <div className="app">
      <Tabs
        categories={['All', ...quotes.map(cat => cat.category)]}
        setActiveCategory={setActiveCategory}
      />
      <div className="card-container">
        {filterQuotesByCategory(activeCategory).map((quote, index) => (
          <Card key={index} text={quote} />
        ))}
      </div>
    </div>
  );
};

export default App;
