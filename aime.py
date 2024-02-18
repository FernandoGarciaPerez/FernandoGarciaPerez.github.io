import requests
import time

def get_all_admins():
    get_admins = [user for user in get_objects('/api/v1/iam/assignees/users')]
    
    return get_admins
def get_admin_roles(user_id, role_links):
    if user_id not in role_links:
        try:
            role_types = [user['label'] for user in get_objects(f'/api/v1/users/{user_id}/roles')]
            role_links[user_id] = ', '.join(role_types)
        except Exception:
            pass
        except KeyError: # type: ignore
            pass

    return role_links[user_id]

def extract_user_data(users, role_links):
    user_data = []
    for user in users:
        user_id = user['id']
        user_name = user['profile']['login']
        #email = user['profile']['email']
        first_name = user['profile']['firstName']
        last_name = user['profile']['lastName']
        full_name = f'{first_name} {last_name}'
        try:
            manager = user['profile']['manager']
        
        except KeyError:
            manager = 'Missing manager'
            

        roles = get_admin_roles(user_id, role_links)
        user_data.append({'id': user_id, 'username': user_name, 'full_name': full_name, 'manager': manager, 'roles':roles})
    
    for i in range(len(user_data) - 1, -1, -1):
        if user_data[i]["roles"] == "":
            del user_data[i]

    return user_data

def extract_app_user_data(users):
    admin_user_data = {}
    role_links = {}
    for user in users:
        print("User data:", user)#imprime para saber los datos que estas procesando
        user_id = user['id']
        roles = get_admin_roles(user_id, role_links)
        for role in roles.split(', '):
            if role not in admin_user_data:
                admin_user_data[role] = []
            admin_user_data[role].append(user['profile']['login'])

    return admin_user_data, role_links

def get_objects(path):
    url = org_url + path
    while url:
        r = session.get(url)
        data = r.json()
        for o in data:
            yield o
        url = r.links.get('next', {}).get('url')

org_url = f'{url}'
session = requests.Session()
session.headers['authorization'] = apitoken

start_time = time.time()

users = get_all_admins()
admin_user_data, role_links = extract_app_user_data(users)
extracted_users = extract_user_data(users, role_links)

print(users)

# Calculate and print the execution time
end_time = time.time()
execution_time = end_time - start_time
print(f"Execution time: {execution_time} seconds.")
        