import Skeleton from 'react-loading-skeleton';

export default function SolutionSkeleton() {
  return (
    <>
      <h2>
        <Skeleton width={40} />
      </h2>
      <h3>
        <Skeleton width={80} />
      </h3>
      <div data-rehype-pretty-code-fragment>
        <Skeleton height={132} borderRadius={8} />
      </div>
      <p>
        <Skeleton count={3} />
      </p>

      <h3>
        <Skeleton width={80} />
      </h3>
      <div data-rehype-pretty-code-fragment>
        <Skeleton height={132} borderRadius={8} />
      </div>
      <p>
        <Skeleton count={5} />
      </p>
    </>
  );
}
