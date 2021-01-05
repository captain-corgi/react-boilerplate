import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the skeleton state domain
 */

const selectSkeletonDomain = state => state.skeleton || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Skeleton
 */

const makeSelectSkeleton = () =>
  createSelector(
    selectSkeletonDomain,
    substate => substate,
  );

export default makeSelectSkeleton;
export { selectSkeletonDomain };
