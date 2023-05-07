import data from '$lib/data';
import { redirect } from '@sveltejs/kit';

export function load({ params }) {
  let postData: any
  try {
    postData = data[params.name][params.date]
  }
  catch (err) {
    throw redirect(302, '/');

  }
  if (!postData) throw redirect(302, '/');

  return {
    data: postData
  }
}