function getAllMatches(allColthes) {
  const show = [];
  allColthes.map((clothes)=> {
    if (clothes.sort === "coat") {
      clothes.matches.map((match)=> {
        show.push(
          {
            up: {id: clothes.c_id, imgUp: clothes.image},
            down: {id: match, imgDown: match}
          }
        );
      });
    }
  });
  show.map((cloth)=> {
    const a = allColthes.find(i=>i.c_id === cloth.down.id);
    if (a) {
      cloth.down.id = a.c_id;
      cloth.down.imgDown = a.image;

    }
  });
  return show;
}

module.exports = getAllMatches;