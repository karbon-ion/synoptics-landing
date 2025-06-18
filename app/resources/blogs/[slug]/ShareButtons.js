"use client"

const ShareButtons = ({ title }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[16px] leading-[100%] font-semibold" style={{ fontFamily: 'Syne' }}>Share with your community!</span>
      <div className="flex gap-3">
        <button
          onClick={() => {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
          }}
        >
          <img src="/blogs/facebook.svg" alt="Share on Facebook" width={31} height={31} />
        </button>
        <button
          onClick={() => {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
          }}
        >
          <img src="/blogs/linkedin-blog.svg" alt="Share on LinkedIn" width={31} height={31} />
        </button>
        <button
          onClick={() => {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(title);
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
          }}
        >
          <img src="/blogs/twitter.svg" alt="Share on Twitter" width={32} height={31} />
        </button>
      </div>
    </div>
  );
};

export default ShareButtons;
