import React from 'react';
import { x } from '@xstyled/emotion';

import type { SystemProps } from '@xstyled/emotion';

interface PaginationProps extends SystemProps {
  currentPage: number;
  pagesCount: number;
  onPageChange: (targetPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pagesCount,
  onPageChange,
  ...props
}) => {
  return (
    <x.nav
      className='pagination-nav'
      px={{ _: 4, sm: 0 }}
      {...props}
    >
      {currentPage > 1 ? (
        <x.div className='previous-button-container'>
          <x.a
            className='pagination-button-content'
            onClick={() => onPageChange(currentPage - 1)}
          >
            <x.svg
              className='pagination-button-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </x.svg>
            Previous
          </x.a>
        </x.div>
      ) : null}

      <x.div display={{ _: 'hidden', md: 'flex' }} mt='-1px'>
        {new Array(pagesCount).fill(undefined).map((_, idx) => (
          <x.a
            key={idx}
            aria-current={idx === currentPage - 1 ? 'page' : undefined}
            className={idx===currentPage-1 ? 'page-button-active' : 'page-button-inactive'}
            onClick={() => onPageChange(idx + 1)}
          >
            {idx + 1}
          </x.a>
        ))}
      </x.div>

      {currentPage < pagesCount ? (
        <x.div className='next-button-content'>
          <x.a
            className='pagination-button-content'
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
            <x.svg
              className='pagination-button-icon'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fillRule='evenodd'
                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </x.svg>
          </x.a>
        </x.div>
      ) : null}
    </x.nav>
  );
};

export default Pagination;
