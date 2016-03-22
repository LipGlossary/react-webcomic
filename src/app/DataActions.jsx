import alt from '../lib/alt';
import _   from 'lodash'
;
class DataActions {
  constructor () {
    this.generateActions();
  }

  setData (data) {
    let {chapters, pages, series} = data.type;
    chapters = _.groupBy(chapters, 'metafield.series.value');
    pages = _.groupBy(pages, 'metafield.series.value');
    let parsedSeries = _
    .chain(series)
    .map((s) => {
      let chapterPages = _.groupBy(pages[s.slug], 'metafield.chapter.value');
      return {
        title: s.title,
        slug: s.slug,
        chapters: _
        .chain(chapters[s.slug])
        .map((c) => {
          let chapterNum = c.metafield.chapter.value;
          return {
            title: c.title,
            slug: c.slug,
            series: c.metafield.series.value,
            chapter: chapterNum,
            pages: _
            .chain(chapterPages[chapterNum])
            .map((p) => {
              return {
                title: p.title,
                slug: p.slug,
                series: p.metafield.series.value,
                chapter: p.metafield.chapter.value,
                page: p.metafield.page.value,
                asset: p.metafield.asset.value
              };
            })
            .sortBy('page')
            .value()
          };
        })
        .sortBy('chapter')
        .value()
      };
    })
    .value();
    return parsedSeries;
  }
}

export default alt.createActions(DataActions);
