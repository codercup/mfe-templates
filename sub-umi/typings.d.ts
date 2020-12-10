declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.jpg';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare interface window {
  __POWERED_BY_QIANKUN__: string | undefined;
}

// window.__POWERED_BY_QIANKUN__ = window.__POWERED_BY_QIANKUN__ || undefined;
