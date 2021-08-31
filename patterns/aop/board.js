const getArticles = async () => {
  const response = await fetch('./articles.json');
  const data = await response.json();
  return data
}


class LoggerAspect {
  @beforeMethod({
    methodNamePattern: /.*/,
    classNamePattern: /Article/
  })
  beforeLogger(meta, ...args) {
    console.log(`Invoked ${meta.name} with arguments: ${ args.join(', ') }`);
  }

  @afterResolve({
    methodNamePattern: /.*/,
    classNamePattern: /Article/
  })
  afterResolveLogger(meta) {
    console.log(`The invocation of ${meta.name}`);
  }

  @afterReject({
    methodNamePattern: /.*/,
    classNamePattern: /Article/
  })
  afterRejectLogger(meta) {
    console.log(`Error during the invocation of ${meta.name}`);
  }
}

@Wove
class ArticleCollection {
  getArticleById(id) {
    console.log(`getArticleById: ${id}`);
    return fetch('./articles.json').then(res => res.json())
  }
  getArticles() {
    console.log('getArticles');
    return fetch('./articles.json').then(res => res.json())
  }
  removeArticleById(id) {
    console.log(`removeArticleById: ${id}`);
    return fetch('./articles.json').then(res => res.json())
  }
  updateArticle(id, article) {
    console.log(`updateArticle: ${id}, ${article}`);
    return fetch('./articles.json').then(res => res.json())
  }
}