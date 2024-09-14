// src/app/biographies/model/biography.model.ts
export class Biography {
  Id: string;
  LastModified: string;
  PublicationDate: string;
  DateCreated: string;
  IncludeInSitemap: boolean;
  SystemSourceKey: string | null;
  UrlName: string;
  ItemDefaultUrl: string;
  Summary: string;
  Biography: string;
  Title: string;
  ParentId: string;
  Provider: string;

  constructor(data: any) {
    this.Id = data.Id || '';
    this.LastModified = data.LastModified || '';
    this.PublicationDate = data.PublicationDate || '';
    this.DateCreated = data.DateCreated || '';
    this.IncludeInSitemap = data.IncludeInSitemap || false;
    this.SystemSourceKey = data.SystemSourceKey || null;
    this.UrlName = data.UrlName || '';
    this.ItemDefaultUrl = data.ItemDefaultUrl || '';
    this.Summary = data.Summary || '';
    this.Biography = data.Biography || '';
    this.Title = data.Title || '';
    this.ParentId = data.ParentId || '';
    this.Provider = data.Provider || '';
  }
}
