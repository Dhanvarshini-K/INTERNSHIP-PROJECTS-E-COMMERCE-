import React, { useState, useEffect,useReducer } from 'react';
import down_arrow from '../../assets/icons/down_arrow.svg';
import first_page_first_icon from '../../assets/icons/first_page_first_icon.svg';
import first_page_second_icon from '../../assets/icons/first_page_second_icon.svg';
import first_page_third_icon from '../../assets/icons/first_page_third_icon.svg';
import first_page_fourth_icon from '../../assets/icons/first_page_fourth_icon.svg';

import ArticleList from '../Article_Card/articleList';

const BlogMain = () => {
  const [showMore, setShowMore] = useState<Boolean>(false);
  const [selectedSortOption, setSelectedSortOption] = useState<string>(''); // Track selected sort option

  const viewReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'THREE':
        return 'row-cols-md-3 fw-bold fs-6';
      case 'FOUR':
        return 'row-cols-md-4';
      case 'TWO':
        return 'row-cols-md-2';
      case 'ONE':
        return 'row-cols-md-1';
      default:
        return state;
    }
  };

  const [gridView, dispatch] = useReducer(viewReducer, 'row-cols-md-3');
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check on mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSortOptionSelect = (type: string) => {
    dispatch({ type });
    setSelectedSortOption(type);
  };

  return (
    <>
      {/* ... your existing code ... */}

      <section className="container d-flex justify-content-between p-3">
        {/* The div is hidden for small screens using the "d-none d-md-flex" classes */}
        <div className={`d-flex gap-2 align-items-baseline ${isSmallScreen ? 'd-none d-md-flex' : ''}`}>
          <p className="text-center fs-5">{selectedSortOption || 'Sort by'}</p>
          <img src={down_arrow} alt="down_arrow" />
        </div>

        {/* The dropdown list is visible for small screens */}
        {isSmallScreen && (
          <div className="d-flex flex-column">
            <button onClick={() => handleSortOptionSelect('THREE')} className="border-1">
              <img src={first_page_first_icon} alt="first_page_icon" />
            </button>
            <button onClick={() => handleSortOptionSelect('FOUR')} className="border-1">
              <img src={first_page_second_icon} alt="first_page_icon" />
            </button>
            <button onClick={() => handleSortOptionSelect('TWO')} className="border-1">
              <img src={first_page_third_icon} alt="first_page_icon" />
            </button>
            <button onClick={() => handleSortOptionSelect('ONE')} className="border-1">
              <img src={first_page_fourth_icon} alt="first_page_icon" />
            </button>
          </div>
        )}
      </section>

      {/* Dynamic grid view is conditionally rendered based on screen size */}
      {!isSmallScreen && (
        <ArticleList view={gridView} addArticle={showMore} />
      )}

      <div className="p-4 d-flex justify-content-center">
        {showMore ? (
          <button onClick={() => setShowMore(false)} className="btn shadow-none bg-white btn-rounded border-dark">
            Show Less
          </button>
        ) : (
          <button onClick={() => setShowMore(true)} className="btn shadow-none bg-white btn-rounded border-dark">
            Show More
          </button>
        )}
      </div>
    </>
  );
};

export default BlogMain;
