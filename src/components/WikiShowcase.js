import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '@site/src/css/styles.module.css';

const Tag = ({ color, text }) => {
  return (
    <span className={styles.tag}>
      <span className={styles.tagCircle} style={{ '--tag-color': color }}></span>
      {text}
    </span>
  );
};

const Showcase = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const json = [
      {
        title: 'Item 1',
        description:
          'Description L1<br />Description L2<br />Description L3<br />Description L4<br />Description L5<br />Description L6',
        tags: [
          { color: '#FF0000', text: 'v7' },
          { color: '#00FF00', text: 'v6' },
          { color: '#0000FF', text: 'Tag 3' },
        ],
        path: '/path/',
      },
      {
        title: 'Item 2',
        description: `Description L1
        Description L2
        Description L3`,
        tags: [
          { color: '#FF0000', text: 'v7' },
          { color: '#00FF00', text: 'v6' },
          { color: '#0000FF', text: 'Tag 3' },
        ],
        path: '/path/',
      },
    ];

    setItems(json);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleClearSelections = () => {
    setSelectedTags([]);
  };

  const filteredItems =
    selectedTags.length === 0
      ? items
      : items.filter((item) => selectedTags.some((tag) => item.tags.includes(tag)));

  const handleButtonRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <ul className={clsx('pills', styles.pills)}>
        <li
          className={clsx('pills__item', {
            'pills__item--active': selectedTags.length === 0,
          })}
          onClick={handleClearSelections}
        >
          All
        </li>
        <li
          className={clsx('pills__item', {
            'pills__item--active': selectedTags.includes('v7'),
          })}
          onClick={() => handleTagClick('v7')}
        >
          v6
        </li>
        <li
          className={clsx('pills__item', {
            'pills__item--active': selectedTags.includes('v6'),
          })}
          onClick={() => handleTagClick('v6')}
        >
          v7
        </li>
        <li
          className={clsx('pills__item', {
            'pills__item--active': selectedTags.includes('other'),
          })}
          onClick={() => handleTagClick('other')}
        >
          Other
        </li>
      </ul>

      <div className={clsx('card-demo', styles.cardDemo)}>
        {filteredItems.map((item, index) => (
          <div className={clsx('card', 'card-wrapper', styles.cardWrapper)} key={index}>
            <div className={clsx('card__header', 'my-card-header', styles.cardHeader)}>
              <h3>{item.title}</h3>
            </div>
            <div className={clsx('card__body', 'my-card-body', styles.cardBody)}>
              <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
            <div className={styles.tagContainer}>
              {item.tags.map((tag, index) => (
                <Tag key={index} color={tag.color} text={tag.text} />
              ))}
            </div>
            <div className={clsx('card__footer', 'my-card-footer', styles.cardFooter)}>
              <Link
                className={clsx('button', 'button--secondary', 'button--block')}
                to={item.path}
              >
                Go to Wiki
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
