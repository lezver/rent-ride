import { Watch } from 'react-loader-spinner';

export const Loader = () => (
  <Watch
    height="80"
    width="80"
    radius="48"
    color="#3470ff"
    ariaLabel="watch-loading"
    wrapperStyle={{ justifyContent: 'center' }}
    wrapperClassName=""
    visible={true}
  />
);
