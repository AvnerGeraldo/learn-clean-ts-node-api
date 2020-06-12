import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  async connect (url: string): Promise<void> {
    this.client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    this.client.close()
  },

  getColletion (name: string): Collection {
    return this.client.db().collection(name)
  },
  map (collection: any): any {
    const { _id: id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id })
  }
}
