const UniversalCardPage = ({ card }) => (
  <div>
    {card.blocks.map((block, idx) => {
      switch (block.type) {
        case "title":
          return (
            <h2
              key={idx}
              className="text-block"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          );
        case "paragraph":
          return (
            <p
              key={idx}
              className="text-block-paragraph"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          );
        case "paragraph-heart":
          return (
            <p
              key={idx}
              className="text-block-paragraph-heart"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          );
        case "media-block":
          return (
            <div
              key={idx}
              className={`media-block ${
                block.direction === "row-reverse"
                  ? "second-media-block"
                  : "first-media-block"
              }`}
            >
              <div
                className={`media-block-text ${
                  block.direction === "row-reverse"
                    ? "second-media-block-text"
                    : "first-media-block-text"
                }`}
              >
                <h2>{block.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: block.text }} />
              </div>
              <div className="media-block-img-wrapper">
                <img
                  src={block.img}
                  alt=""
                  className={`media-block-img ${
                    block.direction === "row-reverse"
                      ? "img-3 second-media-block-img"
                      : "img-2 first-media-block-img"
                  } non-selectable`}
                />
              </div>
            </div>
          );
        case "list":
          return (
            <ul
              key={idx}
              className={`card-list ${
                block.style === "hand-point" ? "hand-point-list" : "point-list"
              } ${block.style === "first" ? "first-list" : "second-list"}`}
            >
              {block.customHeader && (
                <p dangerouslySetInnerHTML={{ __html: block.customHeader }} />
              )}
              {block.items.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          );
        case "ending":
          return (
            <h4 key={idx} className="ending">
              {block.content}&nbsp;
            </h4>
          );
        default:
          return null;
      }
    })}
  </div>
);

export default UniversalCardPage;
