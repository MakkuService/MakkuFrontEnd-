import { createSelector } from 'reselect';

export default function makeDataSelector(entityType) {
  return createSelector(
    (state) => state[entityType],
    (entity) => entity,
  );
}
