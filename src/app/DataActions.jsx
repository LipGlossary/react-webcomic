import alt from '../lib/alt';
import _   from 'lodash'
;
class DataActions {
  constructor () {
    this.generateActions();
  }

  setData (data) {
    let {series, chapters, pages} = data;
    chapters = _.groupBy(chapters, 'series');
    pages = _.groupBy(pages, 'series');
    let parsedSeries = _
    .chain(series)
    .map((s) => {
      let chapterPages = _.groupBy(pages[s.slug], 'chapter');
      return {
        title: s.title,
        slug: s.slug,
        chapters: _
        .chain(chapters[s.slug])
        .map((c) => {
          let chapterNum = c.chapter;
          return {
            title: c.title,
            slug: c.slug,
            series: c.series,
            chapter: chapterNum,
            pages: _
            .chain(chapterPages[chapterNum])
            .map((p) => {
              return {
                title: p.title,
                slug: p.slug,
                series: p.series,
                chapter: p.chapter,
                page: p.page,
                asset: p.asset
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
