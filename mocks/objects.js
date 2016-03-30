module.exports = [
  {
    route: '/object-types',
    method: 'GET',
    code: 200,
    response: () => {
      return {
        "object_types": {
          "series": [
            {
              "1": "56ec41ca8226634447000014",
              "2": "56ec42248226634447000015",
              "_id": "56ec42848226634447000016",
              "order": 0,
              "slug": "belfry",
              "title": "The Belfry Twins",
              "content": "",
              "metafields": [
                {
                  "object_type": "chapters",
                  "edit": 1,
                  "value": "56ec41ca8226634447000014",
                  "key": 1,
                  "title": "Chapter 1",
                  "type": "object",
                  "children": false,
                  "object": {
                    "_id": "56ec41ca8226634447000014",
                    "order": 1,
                    "slug": "chapter-1",
                    "title": "Chapter 1",
                    "content": "",
                    "metafields": [
                      {
                        "object_type": "pages",
                        "edit": 1,
                        "value": "56ec40568226634447000010",
                        "key": 1,
                        "title": 1,
                        "type": "object",
                        "children": false
                      },
                      {
                        "object_type": "pages",
                        "edit": 1,
                        "value": "56ec40d08226634447000011",
                        "key": 2,
                        "title": 2,
                        "type": "object",
                        "children": false
                      },
                      {
                        "object_type": "pages",
                        "edit": 1,
                        "value": "56ec40e48226634447000012",
                        "key": 3,
                        "title": 3,
                        "type": "object",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": "belfry",
                        "key": "series",
                        "title": "Series",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 1,
                        "key": "chapter",
                        "title": "Chapter",
                        "type": "text",
                        "children": false
                      }
                    ],
                    "bucket": "56ec3d778226634447000008",
                    "type_slug": "chapters",
                    "created": "2016-03-18T17:58:34.473Z",
                    "user_id": "56eb3f65f137e10f40000005",
                    "options": {
                      "slug_field": 1,
                      "content_editor": 1,
                      "add_metafields": 1,
                      "metafields_title": 1,
                      "metafields_key": 1
                    },
                    "status": "published",
                    "modified": "2016-03-21T16:22:14.583Z"
                  }
                },
                {
                  "object_type": "chapters",
                  "edit": 1,
                  "value": "56ec42248226634447000015",
                  "key": 2,
                  "title": "Chapter 2",
                  "type": "object",
                  "children": false,
                  "object": {
                    "_id": "56ec42248226634447000015",
                    "order": 0,
                    "slug": "chapter-2",
                    "title": "Chapter 2",
                    "content": "",
                    "metafields": [
                      {
                        "object_type": "pages",
                        "edit": 1,
                        "value": "56ec41318226634447000013",
                        "key": 1,
                        "title": 1,
                        "type": "object",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": "belfry",
                        "key": "series",
                        "title": "Series",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 2,
                        "key": "chapter",
                        "title": "Chapter",
                        "type": "text",
                        "children": false
                      }
                    ],
                    "bucket": "56ec3d778226634447000008",
                    "type_slug": "chapters",
                    "created": "2016-03-18T18:00:04.548Z",
                    "user_id": "56eb3f65f137e10f40000005",
                    "options": {
                      "slug_field": 1,
                      "content_editor": 1,
                      "add_metafields": 1,
                      "metafields_title": 1,
                      "metafields_key": 1
                    },
                    "status": "published",
                    "modified": "2016-03-21T16:22:29.759Z"
                  }
                }
              ],
              "bucket": "56ec3d778226634447000008",
              "type_slug": "series",
              "created": "2016-03-18T18:01:40.799Z",
              "user_id": "56eb3f65f137e10f40000005",
              "options": {
                "slug_field": 1,
                "content_editor": 1,
                "add_metafields": 1,
                "metafields_title": 1,
                "metafields_key": 1
              },
              "status": "published"
            }
          ],
          "pages": [
            {
              "_id": "56ec41318226634447000013",
              "order": 0,
              "slug": "belfry-2-0",
              "title": "Cover",
              "content": "",
              "metafields": [
                {
                  "edit": 1,
                  "value": "33fe9190-ed31-11e5-a90d-1f1400b33ae1-02-01.jpg",
                  "key": "asset",
                  "title": "Image",
                  "type": "file",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": "belfry",
                  "key": "series",
                  "title": "Series",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 2,
                  "key": "chapter",
                  "title": "Chapter",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 0,
                  "key": "page",
                  "title": "Page",
                  "type": "text",
                  "children": false
                }
              ],
              "bucket": "56ec3d778226634447000008",
              "type_slug": "pages",
              "created": "2016-03-18T17:56:01.841Z",
              "user_id": "56eb3f65f137e10f40000005",
              "options": {
                "slug_field": 1,
                "content_editor": 1,
                "add_metafields": 1,
                "metafields_title": 1,
                "metafields_key": 1
              },
              "status": "published",
              "modified": "2016-03-20T16:59:29.149Z",
              "asset": "33fe9190-ed31-11e5-a90d-1f1400b33ae1-02-01.jpg",
              "series": "belfry",
              "chapter": 2,
              "page": 0
            },
            {
              "_id": "56ec40e48226634447000012",
              "order": 1,
              "slug": "belfry-1-2",
              "title": "Page 2",
              "content": "",
              "metafields": [
                {
                  "edit": 1,
                  "value": "1ef4d390-ed31-11e5-a90d-1f1400b33ae1-01-03.jpg",
                  "key": "asset",
                  "title": "Image",
                  "type": "file",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": "belfry",
                  "key": "series",
                  "title": "Series",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 1,
                  "key": "chapter",
                  "title": "Chapter",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 2,
                  "key": "page",
                  "title": "Page",
                  "type": "text",
                  "children": false
                }
              ],
              "bucket": "56ec3d778226634447000008",
              "type_slug": "pages",
              "created": "2016-03-18T17:54:44.645Z",
              "user_id": "56eb3f65f137e10f40000005",
              "options": {
                "slug_field": 1,
                "content_editor": 1,
                "add_metafields": 1,
                "metafields_title": 1,
                "metafields_key": 1
              },
              "status": "published",
              "modified": "2016-03-20T16:59:40.040Z",
              "asset": "1ef4d390-ed31-11e5-a90d-1f1400b33ae1-01-03.jpg",
              "series": "belfry",
              "chapter": 1,
              "page": 2
            },
            {
              "_id": "56ec40d08226634447000011",
              "order": 2,
              "slug": "belfry-1-1",
              "title": "Page 1",
              "content": "",
              "metafields": [
                {
                  "edit": 1,
                  "value": "1ee73f00-ed31-11e5-a90d-1f1400b33ae1-01-02.jpg",
                  "key": "asset",
                  "title": "Image",
                  "type": "file",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": "belfry",
                  "key": "series",
                  "title": "Series",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 1,
                  "key": "chapter",
                  "title": "Chapter",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 1,
                  "key": "page",
                  "title": "Page",
                  "type": "text",
                  "children": false
                }
              ],
              "bucket": "56ec3d778226634447000008",
              "type_slug": "pages",
              "created": "2016-03-18T17:54:24.778Z",
              "user_id": "56eb3f65f137e10f40000005",
              "options": {
                "slug_field": 1,
                "content_editor": 1,
                "add_metafields": 1,
                "metafields_title": 1,
                "metafields_key": 1
              },
              "status": "published",
              "modified": "2016-03-20T16:59:51.547Z",
              "asset": "1ee73f00-ed31-11e5-a90d-1f1400b33ae1-01-02.jpg",
              "series": "belfry",
              "chapter": 1,
              "page": 1
            },
            {
              "_id": "56ec40568226634447000010",
              "order": 3,
              "slug": "belfry-1-0",
              "title": "Cover",
              "content": "",
              "metafields": [
                {
                  "edit": 1,
                  "value": "1ec697a0-ed31-11e5-a90d-1f1400b33ae1-01-01.jpg",
                  "key": "asset",
                  "title": "Image",
                  "type": "file",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": "belfry",
                  "key": "series",
                  "title": "Series",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 1,
                  "key": "chapter",
                  "title": "Chapter",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 0,
                  "key": "page",
                  "title": "Page",
                  "type": "text",
                  "children": false
                }
              ],
              "bucket": "56ec3d778226634447000008",
              "type_slug": "pages",
              "created": "2016-03-18T17:52:22.042Z",
              "user_id": "56eb3f65f137e10f40000005",
              "options": {
                "slug_field": 1,
                "content_editor": 1,
                "add_metafields": 1,
                "metafields_title": 1,
                "metafields_key": 1
              },
              "status": "published",
              "modified": "2016-03-20T17:00:00.470Z",
              "asset": "1ec697a0-ed31-11e5-a90d-1f1400b33ae1-01-01.jpg",
              "series": "belfry",
              "chapter": 1,
              "page": 0
            }
          ],
          "chapters": [
            {
              "1": "56ec41318226634447000013",
              "_id": "56ec42248226634447000015",
              "order": 0,
              "slug": "chapter-2",
              "title": "Chapter 2",
              "content": "",
              "metafields": [
                {
                  "object_type": "pages",
                  "edit": 1,
                  "value": "56ec41318226634447000013",
                  "key": 1,
                  "title": 1,
                  "type": "object",
                  "children": false,
                  "object": {
                    "_id": "56ec41318226634447000013",
                    "order": 0,
                    "slug": "belfry-2-0",
                    "title": "Cover",
                    "content": "",
                    "metafields": [
                      {
                        "edit": 1,
                        "value": "33fe9190-ed31-11e5-a90d-1f1400b33ae1-02-01.jpg",
                        "key": "asset",
                        "title": "Image",
                        "type": "file",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": "belfry",
                        "key": "series",
                        "title": "Series",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 2,
                        "key": "chapter",
                        "title": "Chapter",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 0,
                        "key": "page",
                        "title": "Page",
                        "type": "text",
                        "children": false
                      }
                    ],
                    "bucket": "56ec3d778226634447000008",
                    "type_slug": "pages",
                    "created": "2016-03-18T17:56:01.841Z",
                    "user_id": "56eb3f65f137e10f40000005",
                    "options": {
                      "slug_field": 1,
                      "content_editor": 1,
                      "add_metafields": 1,
                      "metafields_title": 1,
                      "metafields_key": 1
                    },
                    "status": "published",
                    "modified": "2016-03-20T16:59:29.149Z"
                  }
                },
                {
                  "edit": 1,
                  "value": "belfry",
                  "key": "series",
                  "title": "Series",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 2,
                  "key": "chapter",
                  "title": "Chapter",
                  "type": "text",
                  "children": false
                }
              ],
              "bucket": "56ec3d778226634447000008",
              "type_slug": "chapters",
              "created": "2016-03-18T18:00:04.548Z",
              "user_id": "56eb3f65f137e10f40000005",
              "options": {
                "slug_field": 1,
                "content_editor": 1,
                "add_metafields": 1,
                "metafields_title": 1,
                "metafields_key": 1
              },
              "status": "published",
              "modified": "2016-03-21T16:22:29.759Z",
              "series": "belfry",
              "chapter": 2
            },
            {
              "1": "56ec40568226634447000010",
              "2": "56ec40d08226634447000011",
              "3": "56ec40e48226634447000012",
              "_id": "56ec41ca8226634447000014",
              "order": 1,
              "slug": "chapter-1",
              "title": "Chapter 1",
              "content": "",
              "metafields": [
                {
                  "object_type": "pages",
                  "edit": 1,
                  "value": "56ec40568226634447000010",
                  "key": 1,
                  "title": 1,
                  "type": "object",
                  "children": false,
                  "object": {
                    "_id": "56ec40568226634447000010",
                    "order": 3,
                    "slug": "belfry-1-0",
                    "title": "Cover",
                    "content": "",
                    "metafields": [
                      {
                        "edit": 1,
                        "value": "1ec697a0-ed31-11e5-a90d-1f1400b33ae1-01-01.jpg",
                        "key": "asset",
                        "title": "Image",
                        "type": "file",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": "belfry",
                        "key": "series",
                        "title": "Series",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 1,
                        "key": "chapter",
                        "title": "Chapter",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 0,
                        "key": "page",
                        "title": "Page",
                        "type": "text",
                        "children": false
                      }
                    ],
                    "bucket": "56ec3d778226634447000008",
                    "type_slug": "pages",
                    "created": "2016-03-18T17:52:22.042Z",
                    "user_id": "56eb3f65f137e10f40000005",
                    "options": {
                      "slug_field": 1,
                      "content_editor": 1,
                      "add_metafields": 1,
                      "metafields_title": 1,
                      "metafields_key": 1
                    },
                    "status": "published",
                    "modified": "2016-03-20T17:00:00.470Z"
                  }
                },
                {
                  "object_type": "pages",
                  "edit": 1,
                  "value": "56ec40d08226634447000011",
                  "key": 2,
                  "title": 2,
                  "type": "object",
                  "children": false,
                  "object": {
                    "_id": "56ec40d08226634447000011",
                    "order": 2,
                    "slug": "belfry-1-1",
                    "title": "Page 1",
                    "content": "",
                    "metafields": [
                      {
                        "edit": 1,
                        "value": "1ee73f00-ed31-11e5-a90d-1f1400b33ae1-01-02.jpg",
                        "key": "asset",
                        "title": "Image",
                        "type": "file",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": "belfry",
                        "key": "series",
                        "title": "Series",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 1,
                        "key": "chapter",
                        "title": "Chapter",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 1,
                        "key": "page",
                        "title": "Page",
                        "type": "text",
                        "children": false
                      }
                    ],
                    "bucket": "56ec3d778226634447000008",
                    "type_slug": "pages",
                    "created": "2016-03-18T17:54:24.778Z",
                    "user_id": "56eb3f65f137e10f40000005",
                    "options": {
                      "slug_field": 1,
                      "content_editor": 1,
                      "add_metafields": 1,
                      "metafields_title": 1,
                      "metafields_key": 1
                    },
                    "status": "published",
                    "modified": "2016-03-20T16:59:51.547Z"
                  }
                },
                {
                  "object_type": "pages",
                  "edit": 1,
                  "value": "56ec40e48226634447000012",
                  "key": 3,
                  "title": 3,
                  "type": "object",
                  "children": false,
                  "object": {
                    "_id": "56ec40e48226634447000012",
                    "order": 1,
                    "slug": "belfry-1-2",
                    "title": "Page 2",
                    "content": "",
                    "metafields": [
                      {
                        "edit": 1,
                        "value": "1ef4d390-ed31-11e5-a90d-1f1400b33ae1-01-03.jpg",
                        "key": "asset",
                        "title": "Image",
                        "type": "file",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": "belfry",
                        "key": "series",
                        "title": "Series",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 1,
                        "key": "chapter",
                        "title": "Chapter",
                        "type": "text",
                        "children": false
                      },
                      {
                        "edit": 1,
                        "value": 2,
                        "key": "page",
                        "title": "Page",
                        "type": "text",
                        "children": false
                      }
                    ],
                    "bucket": "56ec3d778226634447000008",
                    "type_slug": "pages",
                    "created": "2016-03-18T17:54:44.645Z",
                    "user_id": "56eb3f65f137e10f40000005",
                    "options": {
                      "slug_field": 1,
                      "content_editor": 1,
                      "add_metafields": 1,
                      "metafields_title": 1,
                      "metafields_key": 1
                    },
                    "status": "published",
                    "modified": "2016-03-20T16:59:40.040Z"
                  }
                },
                {
                  "edit": 1,
                  "value": "belfry",
                  "key": "series",
                  "title": "Series",
                  "type": "text",
                  "children": false
                },
                {
                  "edit": 1,
                  "value": 1,
                  "key": "chapter",
                  "title": "Chapter",
                  "type": "text",
                  "children": false
                }
              ],
              "bucket": "56ec3d778226634447000008",
              "type_slug": "chapters",
              "created": "2016-03-18T17:58:34.473Z",
              "user_id": "56eb3f65f137e10f40000005",
              "options": {
                "slug_field": 1,
                "content_editor": 1,
                "add_metafields": 1,
                "metafields_title": 1,
                "metafields_key": 1
              },
              "status": "published",
              "modified": "2016-03-21T16:22:14.583Z",
              "series": "belfry",
              "chapter": 1
            }
          ]
        }
      }
    }
  }
];
