<x-app-layout>
  <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
      <div class="container mx-auto px-6 py-2">

        <div class="bg-white shadow-md rounded my-6">
          <table class="text-left w-full border-collapse">
            <thead>
              <tr>
                <th class="py-4 px-6 bg-grey-lightest font-bold text-sm text-grey-dark border-b border-grey-light">Name</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold text-sm text-grey-dark border-b border-grey-light">Email</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold text-sm text-grey-dark border-b border-grey-light">Phone no</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold text-sm text-grey-dark border-b border-grey-light">Moving From</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold text-sm text-grey-dark border-b border-grey-light">Moving To</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold text-sm text-grey-dark border-b border-grey-light">Message</th>
                <th class="py-4 px-6 bg-grey-lightest font-bold text-sm text-grey-dark border-b border-grey-light text-right w-2/12">Actions</th>
              </tr>
            </thead>
            <tbody>
              @can('Contact access')
                @foreach($contacts as $contact)
                <tr class="hover:bg-grey-lighter">
                  <td class="py-4 px-6 border-b border-grey-light">{{ $contact->name }}</td>
                  <td class="py-4 px-6 border-b border-grey-light">{{ $contact->email }}</td>
                  <td class="py-4 px-6 border-b border-grey-light">{{ $contact->phone_no }}</td>
                  <td class="py-4 px-6 border-b border-grey-light">{{ $contact->moving_from }}</td>
                  <td class="py-4 px-6 border-b border-grey-light">{{ $contact->moving_to }}</td>
                  <td class="py-4 px-6 border-b border-grey-light">{{ $contact->message }}</td>
                  <td class="py-4 px-6 border-b border-grey-light text-right">

                    @can('Contact delete')
                    <form action="{{ route('admin.contacts.destroy', $contact->id) }}" method="POST" class="inline">
                        @csrf
                        @method('delete')
                        <button class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark text-red-400">Delete</button>
                    </form>
                    @endcan
                  </td>
                </tr>
                @endforeach
                @endcan
            </tbody>
          </table>

          @can('Contact access')
          <div class="text-right p-4 py-10">
            {{ $contacts->links() }}
          </div>
          @endcan
        </div>

      </div>
  </main>
</div>
</x-app-layout>
