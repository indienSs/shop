import { FC } from "react";
import ContentLoader from "react-content-loader";

const MyLoader: FC = () => (
  <ContentLoader
    speed={2}
    width={200}
    height={360}
    viewBox="0 0 200 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="200" height="360" />
  </ContentLoader>
);

export default MyLoader;
